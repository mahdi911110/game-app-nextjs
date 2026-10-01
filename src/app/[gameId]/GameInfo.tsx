import { Box, Rating, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import type { GameDetail } from "@/types/type";
import ScoreIcon from "@mui/icons-material/Score";
import GamesIcon from '@mui/icons-material/Games';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DownloadingIcon from '@mui/icons-material/Downloading';
import TagIcon from '@mui/icons-material/Tag';
import BusinessIcon from '@mui/icons-material/Business';
import ExplicitIcon from '@mui/icons-material/Explicit';
import CategoryIcon from "@mui/icons-material/Category";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

export default function GameInfo({ data }: { data: GameDetail }) {
  console.log(data);
  return (
    <Stack>
      <Stack
        direction="row"
        sx={{ alignItems: "center", fontWeight: "bold", color: "white" }}
        spacing={1}
      >
        <InfoIcon
          sx={{
            color: "gold",
            fontSize: "30px",
            p: 1,
            bgcolor: "rgba(180, 175, 113, 0.68)",
            borderRadius: "100%",
          }}
        />
        <Typography sx={{ fontSize: "30px" }}>Detail</Typography>
      </Stack>
      <Stack
        sx={{
          bgcolor: "rgb(28, 25, 28)",
          borderRadius: 3,
          p: 2,
          width: { xs: "100%", md: "300px", lg: "400px" },
        }}
        spacing={2}
      >
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Platforms</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.platforms.map((item, index) =>
                data.platforms.length - 1 === index ? (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.platform.name}
                  >
                    {item.platform.name}
                  </Box>
                ) : (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.platform.name}
                  >
                    {`${item.platform.name},`}&nbsp;
                  </Box>
                ),
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <TagIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Tags</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.tags.map((item, index) =>
                data.tags.length - 1 === index ? (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.name}
                  >
                    {item.name}
                  </Box>
                ) : (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.name}
                  >
                    {`${item.name},`}&nbsp;
                  </Box>
                ),
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <CategoryIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Genres</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.genres.map((item, index) =>
                data.genres.length - 1 === index ? (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.name}
                  >
                    {item.name}
                  </Box>
                ) : (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.name}
                  >
                    {`${item.name},`}&nbsp;
                  </Box>
                ),
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <BusinessIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Developers</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.developers.map((item, index) =>
                data.developers.length - 1 === index ? (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.name}
                  >
                    {item.name}
                  </Box>
                ) : (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.name}
                  >
                    {`${item.name},`}&nbsp;
                  </Box>
                ),
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ExplicitIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>ESRB</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.esrb_rating.name}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ScoreIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Metacretic Score</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.metacritic}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <GamesIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Playtime</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {`${data.playtime}h`}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <EmojiEventsIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Achivment</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.achievements_count}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ThumbUpIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Suggestion</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.suggestions_count}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <DownloadingIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Addistions</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.additions_count}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ThumbsUpDownIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Ratings</Box>
            <Stack sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.ratings.map(rating => {
                const ratingValue = {
                  exceptional: 4,
                  recommended: 3,
                  meh: 2,
                  skip: 1,
                }[rating.title];
                return (
                  <Stack direction="row" key={rating.id} sx={{ alignItems: 'center' }}>
                    <Rating name="half-rating-read" value={ratingValue} precision={1} max={4} readOnly />
                    &nbsp;{rating.percent}%
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}