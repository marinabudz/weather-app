import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  country: { name: string; code: string };
}

const Card: React.FC<CardProps> = ({ country }) => <div>{country?.name}</div>;

export default Card;
