/*
  Warnings:

  - Added the required column `updatedAt` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Tweet" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
