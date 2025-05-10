-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "createdon" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "lastupdateon" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ascent" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "routeid" INTEGER NOT NULL,
    "description" TEXT,
    "createdon" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "lastupdateon" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ascent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "route" (
    "id" SERIAL NOT NULL,
    "routename" VARCHAR(50) NOT NULL,
    "grade" VARCHAR(10) NOT NULL,
    "rank" INTEGER,
    "location" VARCHAR(100),
    "createdon" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "lastupdateon" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "route_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ascent" ADD CONSTRAINT "ascent_routeid_fkey" FOREIGN KEY ("routeid") REFERENCES "route"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ascent" ADD CONSTRAINT "ascent_userid_fkey" FOREIGN KEY ("userid") REFERENCES "USER"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
