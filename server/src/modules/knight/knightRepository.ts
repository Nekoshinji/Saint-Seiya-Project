import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Knights = {
  id: number;
  img: string;
  firstname: string;
  age: string;
  ranking: string;
  constellation: string;
  descript: string;
  domain_id: number;
};

class knightRepository {
  // The C of CRUD - Create operation

  async create(knight: Omit<Knights, "id">): Promise<number> {
    // Execute the SQL INSERT query to add a new knight to the "knight" table
    const [result] = await databaseClient.query<Result>(
      "insert into knight (img, firstname, age, ranking, constellation, descript, domain_id) values (?, ?, ?, ?, ?, ?, ?)",
      [
        knight.img,
        knight.firstname,
        knight.age,
        knight.ranking,
        knight.constellation,
        knight.descript,
        knight.domain_id,
      ],
    );

    // Return the ID of the newly inserted knight
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async getKnightsByDomain(domainId: number): Promise<Knights[]> {
    // Exécution de la requête SQL pour récupérer les chevaliers d'un domaine
    const [rows] = await databaseClient.query(
      "SELECT * FROM knight WHERE domain_id = ?;",
      [domainId],
    );

    return rows as Knights[];
  }
}
// async read(id: number) {
//   // Execute the SQL SELECT query to retrieve a specific item by its ID
//   const [rows] = await databaseClient.query<Rows>(
//     "select * from knight where id = ?",
//     [id],
//   );

//   // Return the first row of the result, which represents the item
//   return rows[0] as Knights;
// }

export default new knightRepository();
