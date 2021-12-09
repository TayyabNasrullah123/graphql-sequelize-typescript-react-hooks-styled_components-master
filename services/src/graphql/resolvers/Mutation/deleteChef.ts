import { Chef } from "#root/db/models";

const deleteChefResolver = (context: any, { id }: { id: string }) => {
  return Chef.destroy({ where: { id } });
};

export default deleteChefResolver;
