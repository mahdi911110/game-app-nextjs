'use client';

import { CircularProgress, Fab } from "@mui/material";
import { useActionState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { buttonDeleteAction } from "./buttonDeleteAction";
import { useQueryClient } from "@tanstack/react-query";

export default function ButtonDelete({ id }: { id: number }) {
  const [state, formAction, isPending] = useActionState(
    buttonDeleteAction.bind(null, id),
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
        aria-label="delete"
        type="submit"
        color="error"
        disabled={isPending}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {isPending ?
          <CircularProgress size="20px" aria-label="Loading…" sx={{ color: 'darkSurface.text' }} />
        :
          <DeleteIcon />
        }
      </Fab>
    </form>
  );
}