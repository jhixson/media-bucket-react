import React from "react";
import { Item } from "../__generated__/types";

const MediaItem: React.FC<Item> = ({ title, status }) => (
  <div>
    <h2>{title}</h2>
    <p>{status}</p>
  </div>
);

export default MediaItem;
