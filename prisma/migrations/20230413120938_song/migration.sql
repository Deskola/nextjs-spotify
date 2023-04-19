/*
  Warnings:

  - Made the column `userId` on table `playlist` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `duration` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `playlist` DROP FOREIGN KEY `PlayList_userId_fkey`;

-- AlterTable
ALTER TABLE `playlist` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `song` ADD COLUMN `duration` INTEGER NOT NULL,
    ADD COLUMN `url` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `PlayList` ADD CONSTRAINT `PlayList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
