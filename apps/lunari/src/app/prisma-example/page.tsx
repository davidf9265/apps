import prisma from '../../../utils/db';

import React from 'react';

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'Learn Prisma',
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => (
        <div key={task.id}>{task.content}</div>
      ))}
    </div>
  );
};

export default PrismaExample;
