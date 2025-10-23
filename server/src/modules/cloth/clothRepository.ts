import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Cloths = {
  id: number;
  img: string;
  armor: string;
  vrs: string;
  descript: string;
  domain_id: number;
};

class clothRepository {
  // The C of CRUD - Create operation

  async create(cloth: Omit<Cloths, "id">) {
    // Execute the SQL INSERT query to add a new cloth to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into myth_cloth (img, armor, vrs, descript, domain_id) values (?, ?, ?, ?, ?)",
      [cloth.img, cloth.armor, cloth.vrs, cloth.descript, cloth.domain_id],
    );

    // Return the ID of the newly inserted cloth
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async getClothsByDomain(domainId: number): Promise<Cloths[]> {
    // Exécution de la requête SQL pour récupérer les chevaliers d'un domaine
    const [rows] = await databaseClient.query(
      "SELECT * FROM myth_cloth WHERE domain_id = ?;",
      [domainId],
    );

    return rows as Cloths[];
  }
}

// async read(id: number) {
//   // Execute the SQL SELECT query to retrieve a specific item by its ID
//   const [rows] = await databaseClient.query<Rows>(
//     "select * from myth_cloth where id = ?",
//     [id],
//   );

//   // Return the first row of the result, which represents the item
//   return rows[0] as cloth;
// }

export default new clothRepository();
