import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MigrateDbService {
  constructor(private readonly connection: Connection) {}

  async run() {
    const queryRunner = this.connection.createQueryRunner();

    // Check if tables exist
    const tables = [
      'user',
      'status',
      'zone',
      'camera',
      'team',
      'incident_case',
      'incident_review',
    ];

    let tableExists = false;
    for (const table of tables) {
      const doesTableExist = await queryRunner.hasTable(table);

      if (doesTableExist) {
        tableExists = true;
        break;
      }
    }

    if (tableExists) {
      await queryRunner.release();
      console.log(
        'Table already exists! To import tables, first drop all tables',
      );
      return true;
    }

    const folderPath = path.resolve(__dirname, '../../db-migrations/sql');
    await this.executeSqlFiles(folderPath, queryRunner);
  }

  private async executeSqlFiles(folderPath: string, queryRunner) {
    try {
      await queryRunner.startTransaction();
      const fileNames = fs.readdirSync(folderPath).sort();

      for (const fileName of fileNames) {
        const filePath = `${folderPath}/${fileName}`;
        const queries = fs.readFileSync(filePath, 'utf8');
        const sqlStatements = queries.split(';');
        for (const sql of sqlStatements) {
          if (sql) {
            await queryRunner.query(sql);
          }
        }
        console.log(`Executed queries from: ${fileName}`);
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      console.error('Error executing SQL files:', error);
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
