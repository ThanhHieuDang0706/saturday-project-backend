/*
  Warnings:

  - Added the required column `dienTich` to the `ChoO` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hinhAnh` to the `ChoO` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChoO" ADD COLUMN     "dienTich" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "hinhAnh" TEXT NOT NULL;
