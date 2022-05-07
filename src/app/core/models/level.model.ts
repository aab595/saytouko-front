export class Level {
  status: string;
  payload: [
    {
      id?: string;
      libelle: string;
      cycle: string;
      commentaire: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  message?: string;
}
