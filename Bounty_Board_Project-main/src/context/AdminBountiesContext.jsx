import React, { createContext, useContext, useMemo, useState } from "react";

const Ctx = createContext(null);
export const useAdminBounties = () => useContext(Ctx);

const seed = [
  {
    id: "b1",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "pending",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b2",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "pending",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b3",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "pending",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b4",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "pending",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b5",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "approved",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b6",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "approved",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b7",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "approved",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b8",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "approved",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b9",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "rejected",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b10",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "rejected",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b11",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "rejected",
    price: 1000,
    initials: "JS",
  },
  {
    id: "b12",
    posterName: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "rejected",
    price: 1000,
    initials: "JS",
  },
];

export function AdminBountiesProvider({ children }) {
  const [bounties, setBounties] = useState(seed);

  const api = useMemo(() => {
    const byStatus = (s) => bounties.filter((b) => b.status === s);
    const getById = (id) => bounties.find((b) => b.id === id);
    const approve = (id) => {
      setBounties((prev) => prev.map((b) => (b.id === id ? { ...b, status: "approved" } : b)));
      console.log(`Bounty ${id} approved`);
    };
    const reject = (id) => {
      setBounties((prev) => prev.map((b) => (b.id === id ? { ...b, status: "rejected" } : b)));
      console.log(`Bounty ${id} rejected`);
    };

    const stats = {
      total: bounties.length,
      approved: byStatus("approved").length,
      rejected: byStatus("rejected").length,
      pending: byStatus("pending").length,
    };

    return { bounties, byStatus, getById, approve, reject, stats };
  }, [bounties]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}
