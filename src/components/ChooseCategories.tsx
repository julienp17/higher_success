import React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import compareCategories from '../data/index'
import { Category } from '../data/types';
import { useRecoilState } from 'recoil';
import selectedCategoriesAtom from '../recoil/atoms/selectedCategories';

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
  onClose: () => void
}

export default function ChooseCategoriesDialog({ open, onClose } : DialogProps) {
  const [selectedCategories, setSelectedCategories] = useRecoilState(selectedCategoriesAtom)

  const handleToggle = (category: string) => {
    const currentIndex = selectedCategories.indexOf(category);
    const newSelectedCategories = [...selectedCategories];

    if (currentIndex === -1) {
      newSelectedCategories.push(category);
    } else {
      newSelectedCategories.splice(currentIndex, 1);
    }
    setSelectedCategories(newSelectedCategories);
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
              checked={selectedCategories.includes(category.title)}
              onToggle={handleToggle}
            />
          )
        }
      </List>
    </Dialog>
  )
}