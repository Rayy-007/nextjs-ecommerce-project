import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

const AddProduct = () => {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Add Product</h2>
      <form action={addProduct}>
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="input-bordered input mb-3 w-full "
        />
        <input
          required
          type="number"
          name="price"
          placeholder="Price"
          className="input-bordered input mb-3 w-full "
        />
        <button type="submit" className="btn bg-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
