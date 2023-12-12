
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./InvoiceList.css";

function CommentsTab() {
  const [CommentsList, setCommentsList] = useState([
    {
      ADDED_BY: "Rahul Rohilla",
      Date: "19/10/2023",
      Comment: "This is the comment",
    },
    
  ]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField placeholder="Add comments" />
        <Button
          color="primary"
          variant="contained"
          sx={{
            ml: 2,
          }}
        >
          Add comments{" "}
        </Button>
      </div>

      <div>
        {CommentsList.map((val) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>{val.ADDED_BY}</p>
              <p
                style={{
                  marginLeft: 10,
                }}
              >
                {val.Date}
              </p>
              <p
                style={{
                  marginLeft: 10,
                }}
              >
                {val.Comment}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentsTab;