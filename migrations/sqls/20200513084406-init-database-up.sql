CREATE TABLE `subscriber` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`full_name` TINYTEXT NOT NULL,
`register_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `landline_phone` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`subscriber_id` INT(11) NOT NULL ,
`phone_number` TINYTEXT NOT NULL ,
`creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`),
FOREIGN KEY (`subscriber_id`) REFERENCES `subscriber`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE `mobile_phone` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`subscriber_id` INT(11) NOT NULL ,
`phone_number` TINYTEXT NOT NULL ,
`creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`),
FOREIGN KEY (`subscriber_id`) REFERENCES `subscriber`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

INSERT INTO `subscriber` (full_name) VALUES ('Jon Doe');
SELECT @subscriber_id := LAST_INSERT_ID();
INSERT INTO `landline_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '80178887766');
INSERT INTO `mobile_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '+375291112233');

INSERT INTO `subscriber` (full_name) VALUES ('Marko Polo');
SELECT @subscriber_id := LAST_INSERT_ID();
INSERT INTO `landline_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '80174567777');
INSERT INTO `mobile_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '+375294567777');
INSERT INTO `mobile_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '+375334567777');

INSERT INTO `subscriber` (full_name) VALUES ('Greg Volt');
SELECT @subscriber_id := LAST_INSERT_ID();
INSERT INTO `landline_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '80171238888');
INSERT INTO `mobile_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '+375292343355');
