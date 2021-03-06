import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { Box, Button, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import Logo from "./Foto/lady-removebg-preview.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AwesomeSlider className="hero" sx={{ bgColor: "green" }}>
        <div>
          <img
            width="100%"
            src="https://cdn.wallpapersafari.com/62/64/TMam8O.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            width="100%"
            height="100%"
            src="https://wallpaperaccess.com/full/986769.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            width="100%"
            src="https://cdn.wallpapersafari.com/91/93/tX0l6Q.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            width="100%"
            src="https://cdn.wallpapersafari.com/4/46/aVROwx.jpg"
            alt=""
          />
        </div>
      </AwesomeSlider>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Typography className="home-p" mt="50px" variant="h5" align="center">
            At Sweet Lady Jane we break our own eggs, peel our own apples, roll
            our own pastry, and squeeze our own lemons. We use the finest fair
            trade chocolate, the freshest butter and cream, the highest quality
            in-season fruit, and no preservatives.
          </Typography>
          <Typography
            className="home-p"
            color="red"
            variant="h5"
            mt="20px"
            mb="20px"
            align="center"
          >
            Our mission is simple – we make good things even better.
          </Typography>
        </Container>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContext: "center",
          textAlign: "center",
          backgroundColor: "#FBD786",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <img
            width="100%"
            src="https://i.pinimg.com/736x/58/f4/dd/58f4dd0d13be4fc9c3affadd25d727c7.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            my="10px"
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Easter is Coming!
            </Typography>
            <Typography
              style={{
                fontStyle: "italic",
                fontSize: "23px",
                padding: "10px 50px",
              }}
            >
              Pre-order your holiday desserts now – Limited quantities
              available.
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                padding: "10px 50px",
              }}
            >
              Choose from our special Easter Triple Berry Cake, Carrot Cake, and
              decorated Cookies.
            </Typography>
            <Typography
              color="darkred"
              style={{
                fontSize: "23px",
                padding: "10px 50px",
              }}
            >
              PLEASE NOTE: Available for pick up April 15-17 only!
            </Typography>
            <Link to="/products">
              <Button
                className="btn"
                variant="outlined"
                style={{ margin: "30px 0" }}
              >
                PRE-ORDER TODAY
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContext: "center",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            color="white"
            my="10px"
            p="0 40px"
            sx={{
              backgroundColor: "black",
              height: "100%",
              fontSize: "23px",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Craving chocolate?
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                margin: "10px",
              }}
            >
              We’re happy to announce the Brownie Cheesecake is back!
            </Typography>
            <Link to="/products">
              <Button
                className="btn"
                variant="outlined"
                style={{ margin: "30px 0" }}
              >
                SHOP NOW
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <img
            width="100%"
            src="https://sweetladyjane.com/wp-content/uploads/2022/03/SLJ-Brownie-Cheesecake-IGPost_1080px.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <img
            width="100%"
            src="https://sweetladyjane.com/wp-content/uploads/2021/06/slj_triple-berry-cake-21_cc_1200px.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            align="center"
            sx={{
              backgroundColor: "#FBD786",
              height: "100%",
            }}
          >
            <img
              style={{ marginTop: "50px" }}
              src="https://sweetladyjane.com/wp-content/uploads/2021/06/SLJ_TripleBerry_Sticker_600px-300x300.png"
              alt=""
            />
            <br />
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginTop: "10px",
              }}
            >
              The Triple Berry Cake
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                padding: "20px 50px",
              }}
            >
              Sweet Lady Jane’s original and L.A.’s favorite special occasion
              cake.
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                padding: "0 50px",
              }}
            >
              We also make a Chocolate version and a Triple Berry Cheesecake!
            </Typography>
            <Link to="/products">
              <Button
                className="btn"
                variant="outlined"
                style={{ margin: "30px 0" }}
              >
                SHOP NOW
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContext: "center",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            color="white"
            my="10px"
            sx={{
              backgroundColor: "black",
              height: "100%",
              fontSize: "23px",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              The Beverly Cake
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                padding: "0 70px",
              }}
            >
              Our latest creation, in celebration of our new bakery in Beverly
              Hills!
            </Typography>
            <Link to="/products">
              <Button
                className="btn"
                variant="outlined"
                style={{ margin: "20px 0" }}
              >
                TRY OUR NEW CAKE
              </Button>
            </Link>
            <br />

            <Link to="/local">
              <Button
                className="btn"
                variant="outlined"
                style={{ margin: "10px 0" }}
              >
                FIND LOCATION
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <img
            width="100%"
            src="https://sweetladyjane.com/wp-content/uploads/2021/06/SLJ_TheBeverlyCake_61_1500sq.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "white" }}>
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            align="center"
            sx={{
              height: "100%",
              fontSize: "23px",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                paddingTop: "80px",
              }}
            >
              Customer Faves
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                padding: "5px 0 20px 0",
              }}
            >
              You can’t go wrong with these bestsellers and seasonal
              specialties!
            </Typography>
          </Typography>
        </Grid>
        <Grid container spacing={4} mb="40px" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2019/12/SLJ_Choc-Cake_6in_1200px-300x300.jpg"
              alt=""
            />

            <Button
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "10px",
                color: "black",
              }}
            >
              DARK CHOCOLATE CAKE
            </Button>
          </Grid>

          <Grid item xs={12} md={3}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2020/05/SLJ_Apple-Pie_6_inch-300x300.jpg"
              alt=""
            />
            <Button
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "10px",
                color: "black",
              }}
            >
              APPLE PIE
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2020/08/SLJ_Treat-Box_1200px-300x300.jpg"
              alt=""
            />
            <Button
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "10px",
                color: "black",
              }}
            >
              THE TREAT BOX
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2021/05/SLJ_Berrymisu-Jar_1200px-300x300.jpg"
              alt=""
            />
            <Button
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "10px",
                color: "black",
              }}
            >
              BERRYMISU JAR
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContext: "center",
          textAlign: "center",
          backgroundColor: "#e8d1e1",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <img
            width="100%"
            src="https://sweetladyjane.com/wp-content/uploads/2021/06/slj_cake-box-112_1200px.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            color="black"
            my="10px"
            sx={{
              height: "100%",
              fontSize: "23px",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Sugar Rush?
            </Typography>
            <Typography
              style={{
                fontSize: "23px",
                padding: "20px 70px",
              }}
            >
              Need a dessert right now? See what’s available at our shops for
              pick up or delivery.
            </Typography>
            <Link to="/products">
              <Button className="btn" variant="outlined">
                SHOP NOW
              </Button>
            </Link>
            <Typography
              style={{
                fontSize: "23px",
                padding: "20px 70px",
              }}
            >
              Our desserts can also be ordered from these delivery partners
            </Typography>
            <a
              href="https://www.ubereats.com/gb"
              style={{ margin: "20px 10px" }}
            >
              <img
                width="25%"
                src="https://sweetladyjane.com/wp-content/uploads/2021/01/Uber-Eats-Logo-300x105.jpeg"
                alt=""
              />
            </a>
            <a href="https://www.doordash.com/">
              <img
                width="25%"
                src="https://sweetladyjane.com/wp-content/uploads/2021/01/Doordash-Logo-300x105.jpeg"
                alt=""
              />
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContext: "center",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            placement="bottom"
            variant="body1"
            component="div"
            align="center"
            color="black"
            my="10px"
            sx={{
              height: "100%",
              fontSize: "23px",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Ordering with our app is a piece of cake!
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                padding: "20px 50px",
                margin: "10px",
              }}
            >
              For pick up or delivery. For now or next month. Download the Sweet
              Lady Jane app then Order. Eat. Repeat.
            </Typography>
            <a
              href="https://apps.apple.com/us/app/apple-store/id1275263822"
              style={{ margin: "20px 10px" }}
            >
              <img
                width="25%"
                src="https://mcusercontent.com/b1873a9504b01a91f59886f09/images/040da4c1-2ce6-4c57-946b-4cf448236b2d.png"
                alt=""
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.chownow.sweetladyjanetogo">
              <img
                width="25%"
                src="https://mcusercontent.com/b1873a9504b01a91f59886f09/images/11ab88f3-d0d5-48be-b84e-027d15d11903.png"
                alt=""
              />
            </a>
            <Typography
              style={{
                fontSize: "18px",
                padding: "20px 70px",
              }}
            >
              Or text SWEETLADYJANE to 33733
            </Typography>
            <Typography
              style={{
                fontSize: "10px",
                padding: "20px 70px",
              }}
            >
              BY USING THIS SERVICE, YOU CONSENT TO RECEIVE TEXT MESSAGES SENT
              BY AN AUTOMATIC TELEPHONE DIALING SYSTEM. MESSAGING AND DATA RATES
              MAY APPLY. YOUR USE OF THE SERVICE IS GOVERNED BY CHOW
              NOW.COM/PRIVACY-POLICY AND TATANGO.COM/PRIVACY-POLICY.
            </Typography>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <img
            width="100%"
            src="https://sweetladyjane.com/wp-content/uploads/2021/06/SLJ_AppOrder_WomanOnPhone_1200px.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <Box style={{ backgroundColor: "#faf8e3", paddingBottom: "50px" }}>
        <Box display="flex" alignItems="center" m="25px 10px">
          <img
            width="8%"
            // src="https://o.remove.bg/downloads/9c488955-5d21-4893-bb64-6b60d744f089/lady-removebg-preview.png"
            src={Logo}
            alt=""
          />
          <a
            href="https://www.instagram.com/sweetladyjanebakeries/"
            style={{
              fontSize: "30px",
              // fontWeight: "bold",
              marginLeft: "10px",
              textDecoration: "none",
              color: "black",
            }}
          >
            sweetjanebakeries
          </a>
        </Box>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
          }}
        >
          <Grid item xs={12} md={2}>
            <a href="https://www.instagram.com/p/Cb748qMAim2/">
              <img
                width="100%"
                src="https://sweetladyjane.com/wp-content/uploads/2021/03/SLJ_Easter-Carrot-Cake_1200px-300x300.jpg"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} md={2}>
            <a href="https://www.instagram.com/p/CakFP62r2db/">
              <img
                width="100%"
                src="https://sweetladyjane.com/wp-content/uploads/2021/05/SLJ_Triple-Berry_6_inch-300x300.jpg"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} md={2}>
            <a href="https://www.instagram.com/p/Cb1V1RLs2Sz/">
              <img
                width="100%"
                src="https://sweetladyjane.com/wp-content/uploads/2021/03/SLJ_Easter-Triple-Berry-Cake_1200px-300x300.jpg"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} md={2}>
            <a href="https://www.instagram.com/p/CaFmCJ5hFme/">
              <img
                width="100%"
                src="https://sweetladyjane.com/wp-content/uploads/2020/08/SLJ_Treat-Box_1200px-300x300.jpg"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} md={2}>
            <a href="https://www.instagram.com/p/CbpvWELA18L/">
              <img
                width="100%"
                src="https://sweetladyjane.com/wp-content/uploads/2021/05/SLJ_Banana_Pudding-Jar_1200px-300x300.jpg"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} md={2}>
            <a href="https://www.instagram.com/p/CaAKTdPjdFe/">
              <img
                width="100%"
                src="https://sweetladyjane.com/wp-content/uploads/2022/02/SLJ_Mixed-Berry-Pie_9in_1200p-300x300.jpg"
                alt=""
              />
            </a>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Typography variant="h5" align="center" m="50px">
            Come visit us at one of our neighborhood bakeries.
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7891933950223!2d74.58995091546709!3d42.87729341027228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec98281e85c63%3A0x305e5b2a69cb4fcb!2sMakers%20Studio!5e0!3m2!1sru!2skg!4v1649415754983!5m2!1sru!2skg"
            width="100%"
            height="300"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </Box>
    </>
  );
};

export default Header;
