import CategoryCard from "./CategoryCard";

const CategoryMenu = () => {
  return (
    <div className="w-full pb-6 pt-16">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h6 className="flex items-center gap-5  text-base font-semibold text-primary">
          <span className="h-12 w-5 rounded-lg bg-primary"></span>
          Categories
        </h6>
        <div className="flex items-end gap-7">
          <h2 className="text-4xl font-bold">Browse By Category</h2>
          <div className="ml-auto mr-7 flex items-center gap-4">
            <button className=" btn-circle btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="btn-circle btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <CategoryCard />
      </div>
    </div>
  );
};

export default CategoryMenu;
