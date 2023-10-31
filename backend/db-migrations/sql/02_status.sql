CREATE TABLE `status` ( `id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(25) NOT NULL, `description` VARCHAR(255) NOT NULL, `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `created_by` INT NOT NULL, `updated_by` INT NOT NULL, `is_active` BOOLEAN NOT NULL DEFAULT TRUE, PRIMARY KEY (`id`), INDEX (`is_active`), UNIQUE (`name`) ) ENGINE = InnoDB; INSERT INTO `status` (`id`, `name`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_active`) VALUES (NULL, 'To Review', 'Under review', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1', '1'); INSERT INTO `status` (`id`, `name`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_active`) VALUES (NULL, 'Review Submitted', 'Review submitted', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1', '1'); INSERT INTO `status` (`id`, `name`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_active`) VALUES (NULL, 'Observation', 'Observation', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1', '1'); INSERT INTO `status` (`id`, `name`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_active`) VALUES (NULL, 'Complete', 'Complete', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1', '1');