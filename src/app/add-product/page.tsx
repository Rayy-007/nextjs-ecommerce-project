import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Flowazon",
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

const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          type="text"
          required
          placeholder="Name"
          name="name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          placeholder="Description"
          name="description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          type="url"
          required
          placeholder="Image URL"
          name="imageUrl"
          className="input input-bordered mb-3 w-full"
        />
        <input
          type="number"
          required
          placeholder="Price"
          name="price"
          className="input input-bordered mb-3 w-full "
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;
