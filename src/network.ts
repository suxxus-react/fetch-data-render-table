export interface Delivery {
  id: number;
  name: string;
  amount: number;
  status: string;
  eta?: number;
}

export const getDeliveries = (): Promise<Delivery[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          name: "Delivery 1",
          amount: 3,
          status: "active",
          eta: 15,
        },
        {
          id: 2,
          name: "Delivery 2",
          amount: 5,
          status: "pending",
        },
        {
          id: 3,
          name: "Delivery 3",
          amount: 3,
          status: "active",
          eta: 10,
        },
        {
          id: 4,
          name: "Delivery 4",
          amount: 4,
          status: "upcoming",
        },
        {
          id: 5,
          name: "Delivery 5",
          amount: 3,
          status: "active",
          eta: 25,
        },
        {
          id: 6,
          name: "Delivery 6",
          amount: 3,
          status: "active",
          eta: 5,
        },
      ];

      resolve(data);
    }, 2000);
  });
};
