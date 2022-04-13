import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useComContext } from "../../Context/ComContextProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const ListCom = () => {
  const { comments, getCom, addCom } = useComContext();
  const { prodId } = useParams();
  console.log(comments);

  useEffect(() => {
    getCom(prodId);
  }, []);

  return (
    <Container>
      {comments.length > 0 ? (
        comments.map((item) => (
          <Container key={item.id}>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FaceIcon sx={{ width: "40px", height: "40px" }} />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.author}
                      </Typography>
                      <Typography>{item.title}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Container>
        ))
      ) : (
        <h2>There is no comments, yet.</h2>
      )}{" "}
    </Container>
  );
};

export default ListCom;
