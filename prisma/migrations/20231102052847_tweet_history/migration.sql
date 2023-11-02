/*
  Warnings:

  - Made the column `style` on table `Tweet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `topic` on table `Tweet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tweet" ALTER COLUMN "style" SET NOT NULL;
ALTER TABLE "Tweet" ALTER COLUMN "topic" SET NOT NULL;
