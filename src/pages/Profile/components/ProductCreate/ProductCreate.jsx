import "./ProductCreate.css";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import { getCategory } from "../../../../api";

export default function ProductCreate() {
  const [imgBox, setimageBox] = useState([]);
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { data } = useQuery("category", getCategory);

  return (
    <div>
      <div className="addImage">
        <h3 className="addImage-title">Rasm qo’shish</h3>
        <div className="addImage-box">
          {imgBox?.map((el, index) => (
            <img
              key={index}
              src={URL.createObjectURL(el)}
              alt="error"
              className="addImage-box-item"
            />
          ))}
          <label htmlFor="create-product-img" className="addImage-box-button">
            <BsPlusCircle />
            <span>Rasm qo’shish</span>
            <input
              type="file"
              id="create-product-img"
              accept="image/*"
              onChange={(e) =>
                setimageBox((state) => [...state, e.target.files[0]])
              }
            />
          </label>
        </div>
        <h4 className="addImage-warning">Muhim</h4>
        <span className="addImage-warning-desc">
          Surat 1080X1080px boʻlishi va 5 MB dan oshmasligi kerak
        </span>
      </div>
      <form className="product-create-form" onSubmit={handleSubmit}>
        <label className="product-create-label">
          <h4>Sarlavha</h4>
          <input type="text" maxLength={500} min={3} required />
        </label>
        <label className="product-create-label">
          <h4>Tovar haqida</h4>
          <textarea rows="10" maxLength={500} min={3} required></textarea>
        </label>
        <label className="product-create-label">
          <h4>Kategoriya</h4>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {data?.objectKoinot.length ? (
                data?.objectKoinot?.map((el, index) => (
                  <MenuItem key={index} value={el?.id}>
                    {el?.nameUz}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value={1}>Kiyim-Kechak</MenuItem>
              )}
            </Select>
          </FormControl>
        </label>
        <label className="product-create-label">
          <h4>Subkategoriya</h4>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {data?.objectKoinot.length ? (
                data?.objectKoinot
                  .find((el) => el.id === category)
                  ?.children?.map((el) => (
                    <MenuItem key={el.id} value={el?.id}>
                      {el?.nameUz}
                    </MenuItem>
                  ))
              ) : (
                <MenuItem value={1}>Erkaklar</MenuItem>
              )}
            </Select>
          </FormControl>
        </label>
        <label className="product-create-label">
          <h4>Ismingiz</h4>
          <input type="text" maxLength={500} min={3} required />
        </label>
        <label className="product-create-label">
          <h4>Telefon raqamingiz</h4>
          <input type="text" maxLength={500} min={3} required />
        </label>
        <label className="product-create-label">
          <h4>Manzil</h4>
          <input type="text" maxLength={500} min={3} required />
        </label>
        <button className="product-create-form-button" type="submit">
          Joylashtirish
        </button>
      </form>
    </div>
  );
}
