import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CloudUpload } from "@mui/icons-material";
import SingleButton from "../uiComp/button/SingleButton";
import SolidButton from "../uiComp/button/SolidButton";
import theme from "../../theme/Theme";
import { Book } from "../../types/book";
import { categories, languages } from "../../data/formOptions";
import axios from "axios";

export default function AddBookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(file);
    }
  };

  const [category, setCategory] = useState("");

  const [price, setPrice] = useState("");

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, ""); // Solo números
    setPrice(value);
  };

  const [isbn, setIsbn] = useState("");
  const [language, setLanguage] = useState("");
  const [condition, setCondition] = useState<"new" | "used">("new");
  const [pages, setPages] = useState("");
  const [stock, setStock] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      // 1. Aquí luego subirás la imagen y obtendrás la URL
      let coverImageUrl = "";
      if (coverImage) {
        // coverImageUrl = await uploadImageToService(coverImage);
        coverImageUrl = "URL_TEMPORAL"; // Mock por ahora
      }

      // 2. Crear objeto Book listo para enviar
      const bookData: Book = {
        id: "temporal",
        title,
        author,
        description,
        coverImage: coverImageUrl,
        category,
        price: Number(price),
        isbn: isbn || undefined,
        language: language || undefined,
        condition: condition || undefined,
        pages: pages ? Number(pages) : 0,
        stock: stock ? Number(stock) : undefined,
        tags: tags.length > 0 ? tags : undefined,
        userId: "USER_ID_TEMPORAL", // Luego conectarás con auth
        createdAt: new Date(),
      };

      const response = await axios.post(
        "http://localhost:3001/books",
        bookData
      );
      console.log("Libro publicado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al publicar libro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Box>
      <Container disableGutters>
        <Box>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <Typography variant="h5">
                  Ingresa los datos de tu libro
                </Typography>
              </Grid2>

              <Grid2
                size={12}
                sx={{
                  p: "1rem",

                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: "10px",
                }}
              >
                <FormControl fullWidth variant="standard">
                  <TextField
                    id="title"
                    label="Título del libro"
                    variant="standard"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth variant="standard">
                  <TextField
                    id="author"
                    label="Autor"
                    variant="standard"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth variant="standard">
                  <TextField
                    id="description"
                    label="Descripción"
                    variant="standard"
                    required
                    multiline
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>
              </Grid2>

              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: "1rem",
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: "10px",
                }}
              >
                <FormControl fullWidth>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUpload />}
                    sx={{
                      /*    p: 3, */
                      borderStyle: "dashed",
                      width: "50%",
                    }}
                  >
                    <Typography variant="body1">
                      {coverImage ? coverImage.name : "Subir portada"}
                    </Typography>
                    <input
                      type="file"
                      id="coverImage"
                      hidden
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </Button>
                </FormControl>

                <FormControl fullWidth variant="standard">
                  <InputLabel id="category-label">Categoría</InputLabel>
                  <Select
                    variant="standard"
                    labelId="category-label"
                    value={category}
                    label="Categoría"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Selecciona una categoría</em>
                    </MenuItem>
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth variant="standard">
                  <TextField
                    label="Precio"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="0"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    type="text"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />
                </FormControl>
              </Grid2>
              {/* TERCERA SECCIÓN - DATOS OPCIONALES */}
              <Grid2
                size={12}
                sx={{
                  p: "1rem",
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: "10px",
                }}
              >
                {/* ISBN */}
                <FormControl fullWidth variant="standard">
                  <TextField
                    id="isbn"
                    label="ISBN"
                    variant="standard"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                  />
                </FormControl>

                {/* Idioma */}
                <FormControl fullWidth variant="standard">
                  <InputLabel id="language-label">Idioma</InputLabel>
                  <Select
                    labelId="language-label"
                    value={language}
                    label="Idioma"
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Selecciona un idioma</em>
                    </MenuItem>
                    {languages.map((lang) => (
                      <MenuItem key={lang} value={lang}>
                        {lang}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Estado (Nuevo/Usado) */}
                <FormControl fullWidth variant="standard">
                  <RadioGroup
                    value={condition}
                    onChange={(e) =>
                      setCondition(e.target.value as "new" | "used")
                    }
                    row
                  >
                    <FormControlLabel
                      value="new"
                      control={<Radio />}
                      label="Nuevo"
                    />
                    <FormControlLabel
                      value="used"
                      control={<Radio />}
                      label="Usado"
                    />
                  </RadioGroup>
                </FormControl>

                {/* Páginas */}
                <FormControl fullWidth variant="standard">
                  <TextField
                    label="Número de páginas"
                    variant="standard"
                    value={pages}
                    onChange={(e) =>
                      setPages(e.target.value.replace(/\D/g, ""))
                    }
                    type="text"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />
                </FormControl>

                {/* Stock */}
                <FormControl fullWidth variant="standard">
                  <TextField
                    label="Stock disponible"
                    variant="standard"
                    value={stock}
                    onChange={(e) =>
                      setStock(e.target.value.replace(/\D/g, ""))
                    }
                    type="text"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />
                </FormControl>

                {/* Etiquetas */}
                <FormControl fullWidth variant="standard">
                  <TextField
                    label="Etiquetas (separadas por comas)"
                    variant="standard"
                    value={tags.join(", ")}
                    onChange={(e) =>
                      setTags(
                        e.target.value.split(",").map((tag) => tag.trim())
                      )
                    }
                  />
                </FormControl>
              </Grid2>

              <Grid2 size={12}>
                <SolidButton type="submit" text="Publicar"></SolidButton>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
