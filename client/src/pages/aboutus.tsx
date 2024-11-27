import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Modal,
  Fade,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

// Detailed information about each team member
const teamMembers = [
  {
    name: "Owen",
    role: "Tech Wizard",
    description:
      "Owen, our fearless leader and tech wizard, brought his expertise in building robust systems to ensure the platform could handle everything from managing guest lists to coordinating multiple vendors. His attention to detail and innovative thinking laid the foundation for Wedding Bliss Planner’s smooth functionality.",
  },
  {
    name: "Amanda",
    role: "Creative Powerhouse",
    description:
      "Amanda, a creative powerhouse with a background in event design, dreamed up the user-friendly interface and vibrant aesthetics that define our platform. Her love for colors, themes, and typography ensures every couple's experience feels personal and inspiring.",
  },
  {
    name: "Anthony",
    role: "Organizational Genius",
    description:
      "Anthony, the organizational genius, poured his heart into crafting tools that help couples stay on top of their planning. With his background in logistics and event coordination, he ensured the platform is packed with features like automated reminders, task management, and a centralized dashboard.",
  },
  {
    name: "Larry",
    role: "Storyteller",
    description:
      "Larry, the storyteller of the group, focused on creating content that connects. His knack for communication shaped our blogs, tips, and vendor recommendations, ensuring couples feel supported and empowered every step of the way.",
  },
  {
    name: "Meyer",
    role: "Numbers Guru",
    description:
      "Meyer, our numbers guru, streamlined the budgeting tools to make tracking expenses a breeze. His expertise ensures every couple can confidently manage their finances while making room for those magical, once-in-a-lifetime splurges.",
  },
];

const AboutUs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState<null | typeof teamMembers[0]>(null);

  const handleOpen = (member: typeof teamMembers[0]) => {
    setCurrentMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentMember(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Avatar
          sx={{ bgcolor: "primary.main", margin: "0 auto", width: 80, height: 80 }}
        >
          <PeopleIcon fontSize="large" />
        </Avatar>
        <Typography variant="h3" component="h1" sx={{ marginBottom: 2 }}>
          About Us
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" display="block">
          Turning your dream weddings into reality, one click at a time.
        </Typography>
      </Box>

      {/* Story Section */}
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Our Story
      </Typography>
      <Typography display="block" sx={{ marginBottom: 2 }}>
        It all started over coffee at a bustling café, where five friends with a shared vision
        realized that the wedding planning process could—and should—be simpler, more accessible,
        and more fun. With backgrounds ranging from web development to event management, we saw an
        opportunity to combine our unique talents and build a platform that bridges the gap between
        dream weddings and reality.
      </Typography>
      <Typography display="block" sx={{ marginBottom: 2 }}>
        With expertise in technology, creativity, organization, storytelling, and finances, we
        crafted a platform to make wedding planning seamless, fun, and inspiring. Each feature is
        designed to empower couples to focus on their love story while we handle the details.
      </Typography>

      {/* Team Section */}
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Meet the Team
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              textAlign: "center",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 6,
              },
            }}
            onMouseEnter={() => handleOpen(member)}
          >
            <CardContent>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 56,
                  height: 56,
                  fontSize: "1.5rem",
                  margin: "0 auto 16px",
                }}
              >
                {member.name.charAt(0)}
              </Avatar>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal Section */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            {currentMember && (
              <>
                <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
                  {currentMember.name} - {currentMember.role}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {currentMember.description}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* Vision Section */}
      <Box mt={4}>
        <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
          Our Vision
        </Typography>
        <Typography display="block" sx={{ marginBottom: 2 }}>
          We know that planning a wedding isn’t just about picking a venue or choosing flowers—it’s
          about celebrating love and creating memories. That’s why we designed{" "}
          <strong>Tie Your Knots</strong> to be more than just a tool. It’s a companion that
          guides couples through every decision, making the journey as beautiful as the destination.
        </Typography>
        <Typography display="block" sx={{ marginBottom: 2 }}>
          Whether you're dreaming of an intimate beach ceremony or a grand ballroom affair, our
          platform empowers you to design your day, your way. We’ve poured our hearts into crafting
          a space where couples can manage guest lists, explore vendors, design custom themes, and
          even sync timelines with family and friends—all while keeping stress at bay.
        </Typography>
      </Box>

      {/* Footer Section */}
      <Box textAlign="center" mt={5}>
        <Typography variant="h6" color="primary">
          From our family to yours, here’s to your happily ever after!
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;