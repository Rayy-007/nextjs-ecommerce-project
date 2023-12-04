const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form>
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
        <button className="btn btn-primary btn-block" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
