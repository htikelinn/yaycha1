import React, { useEffect, useState } from "react";
import { useApp } from "../AppContext";
import { Box } from "@mui/material";
import Form from "../components/Form";
import Item from "../components/Item";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = import.meta.env.VITE_API;
    fetch(`${api}/content/posts`).then(async (res) => {
      setData(await res.json());
    });
  }, []);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
    setGlobalMsg("An item added");
  };
  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.id} item={item} remove={remove} />;
      })}
    </Box>
  );
}
