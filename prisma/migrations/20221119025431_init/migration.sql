/*
  Warnings:

  - You are about to drop the `chuNha` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "chuNha";

-- CreateTable
CREATE TABLE "ChuNha" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "soDienThoai" TEXT NOT NULL,

    CONSTRAINT "ChuNha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChoO" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "soNha" TEXT NOT NULL,
    "tenDuong" TEXT NOT NULL,
    "quan" TEXT NOT NULL,
    "chuNhaId" INTEGER NOT NULL,

    CONSTRAINT "ChoO_pkey" PRIMARY KEY ("id")
);
