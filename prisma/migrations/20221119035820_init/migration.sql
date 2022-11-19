/*
  Warnings:

  - A unique constraint covering the columns `[chuNhaId]` on the table `ChoO` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ChoO_chuNhaId_key" ON "ChoO"("chuNhaId");

-- AddForeignKey
ALTER TABLE "ChoO" ADD CONSTRAINT "ChoO_chuNhaId_fkey" FOREIGN KEY ("chuNhaId") REFERENCES "ChuNha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
