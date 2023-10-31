CREATE TABLE `team` ( `id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(25) NOT NULL, `description` VARCHAR(255) NOT NULL, `address` VARCHAR(255) NOT NULL, `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `created_by` INT NOT NULL, `updated_by` INT NOT NULL, `is_active` BOOLEAN NOT NULL DEFAULT TRUE, PRIMARY KEY (`id`), INDEX (`is_active`), UNIQUE (`name`) ) ENGINE = InnoDB; INSERT INTO `team` (`id`, `name`, `description`, `address`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_active`) VALUES (NULL, 'PTSM Pte Ltd', 'PTSM Private Ltd.', 'PTSM Road 56211, Singapore', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1', '1'); INSERT INTO `team` (`id`, `name`, `description`, `address`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_active`) VALUES (NULL, 'SGCM Pte Ltd', 'SGCM Private Ltd.', 'Link Road 54100, Singapore', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1', '1');