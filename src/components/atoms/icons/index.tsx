import React from "react";

interface SearchProps {
  color?: string;
}

export const Search = (props: SearchProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 18.707 18.708"
    >
      <g id="bx-search-alt" transform="translate(-2 -2)">
        <path
          id="Path_6"
          data-name="Path 6"
          d="M10,18a7.952,7.952,0,0,0,4.9-1.688l4.4,4.4,1.414-1.414-4.4-4.4A7.99,7.99,0,1,0,10,18ZM10,4a6,6,0,1,1-6,6A6.006,6.006,0,0,1,10,4Z"
          fill={props.color || "#9E9E9E"}
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M11.412,8.586A1.991,1.991,0,0,1,12,10h2a3.977,3.977,0,0,0-1.174-2.828,4.088,4.088,0,0,0-5.652,0L8.586,8.588A2.044,2.044,0,0,1,11.412,8.586Z"
          fill={props.color || "#9E9E9E"}
        />
      </g>
    </svg>
  );
};
