import type React from "react";


export interface CardProps{
    children:React.ReactNode,
    className?:string
}

export interface SearchProps{
    
    type?:string
    placeholder?:string
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export interface DestinationProps  {
  city: string;
  image: string;
  attractions?: string;
  price: string;
};

export interface AirportOptionProps {
  skyId: string;
  entityId: string;
  presentation: {
    suggestionTitle: string;
  };
}

export interface FlightResult  {
  airline: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  duration: string;
  stops: string;
};

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}
