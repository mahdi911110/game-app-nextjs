'use client';

import { CircularProgress, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useActionState, useEffect } from "react";
import { buttonAddAction } from "./buttonAddAction";
import { useQueryClient } from "@tanstack/react-query";

export default function ButtonAdd({ id }: { id: number }) {
  const [state, formAction, isPending] = useActionState(
    buttonAddAction.bind(null, id),
    null
  );
  const queryClient = useQueryClient();
  useEffect(() => {
    if (state?.success) {
      queryClient.invalidateQueries({ queryKey: ['watchlist-status'] });
      queryClient.invalidateQueries({ queryKey: ['watchlist-list'] });
    }
  }, [state, queryClient, id]);
  return (
    <form action={formAction}>
      <Fab
        sx={{ position: "absolute", bottom: 5, right: 5 }}
        size="small"
        aria-label="add"
        color="success"
        type="submit"
        disabled={isPending}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {isPending ?
            <CircularProgress size="20px" aria-label="Loading…" sx={{ color: 'darkSurface.text' }} />
          :
            <AddIcon />
        }
      </Fab>
    </form>
  );
}