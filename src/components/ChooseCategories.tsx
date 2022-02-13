import React, { useState } from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import compareCategories from '../data/index'
import { Category } from '../data/types';

type CategoryItemProps = {
  category: Category,
  checked: boolean,
  onToggle: ((category: string) => void)
}

function CategoryItem({ category, checked, onToggle } : CategoryItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={() => onToggle(category.title)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText>
          { category.title } - { category.queries.length } questions
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

type DialogProps = {
  open: boolean,
  onClose: () => void,
  checked: string[],
  setChecked: React.Dispatch<React.SetStateAction<string[]>>
}

export default function ChooseCategoriesDialog({ open, onClose, checked, setChecked } : DialogProps) {
  const handleToggle = (category: string) => {
    const currentIndex = checked.indexOf(category);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(category);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        Categories
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        {
          compareCategories.map(category =>
            <CategoryItem
              key={category.title}
              category={category}
              checked={checked.includes(category.title)}
              onToggle={handleToggle}
            />
          )
        }
      </List>
    </Dialog>
  )
}