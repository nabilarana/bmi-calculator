# Gunakan image nginx resmi
FROM nginx:alpine

# Hapus konfigurasi default nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy semua file frontend ke folder nginx
COPY src/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan nginx
CMD ["nginx", "-g", "daemon off;"]
