export class Grade {
  status: string;
  payload: [
    {
      id?: string;
      libelle: string;
      capacite: string;
      niveau: string;
      commentaire: string;
      createdAt?: Date;
      updatedAt?: Date;
    }
  ];
  message?: string;
}
