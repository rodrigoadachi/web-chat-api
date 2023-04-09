import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class createTableMessage1681042553651 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.createTable(
        new Table({
          name: 'message',
          columns: [
            
            new TableColumn({
              name: 'id',
              isPrimary: true,
              type: 'varchar',
              length: '36',
            }),

            new TableColumn({
              name: 'name',
              type: 'varchar',
              length: '200',
            }),

            new TableColumn({
              name: 'email',
              type: 'varchar',
              length: '200',
            }),

            new TableColumn({
              name: 'text',
              type: 'text',
            }),

            new TableColumn({
              name: 'createdAt',
              type: 'datetime',
            }),

            new TableColumn({
              name: 'updatedAt',
              type: 'datetime',
              isNullable: true,
            }),

            new TableColumn({
              name: 'deletedAt',
              type: 'datetime',
              isNullable: true,
            }),

          ]
        })
      )
    
    } catch (error) {
      console.log({error})            
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      new Table({
        name: 'message',
      }),
    );
  }

}
