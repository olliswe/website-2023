/** @type {import('next').NextConfig} */
const nextConfig = {}
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();


module.exports = withVanillaExtract(nextConfig);
