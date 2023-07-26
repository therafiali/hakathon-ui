import Slugpage from "../../../components/Slugpage";

const Slug = ({params}:{params:{slug:string}}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Slugpage params={params}/>
    </section>
  );
};

export default Slug;
