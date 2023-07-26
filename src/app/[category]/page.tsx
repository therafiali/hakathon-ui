import CategoryPage from "../../components/CategoryPage";

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <section className="pt-[70px] pb-[100px]">
      <CategoryPage params={params} />
    </section>
  );
};

export default Category;
