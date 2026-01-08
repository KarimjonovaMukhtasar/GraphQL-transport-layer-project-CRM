import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config"; 
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private logger = new Logger(PrismaService.name);

  constructor(private configService: ConfigService) {
    const url = configService.get<string>('DATABASE_URL');
    if (!url) {
      throw new Error("DATABASE_URL is not defined in environment variables");
    }

    const pool = new Pool({
      connectionString: url,
    });
    
    const adapter = new PrismaPg(pool);
    
    super({
      adapter,
      log: ["error", "warn"],
    });
  }

  async onModuleInit() {
    await this.$connect(); 
    this.logger.log("Prisma initialized (pg adapter)");
  }
}