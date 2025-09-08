# Portfolio Website - Ilham Wahyuni

This is a personal portfolio website showcasing my skills, projects, and services.

## Project Structure

The website is organized using an MVC-like pattern with partials:

- `index.html` - Main template file with @@include directives
- `partials/` - Directory containing partial HTML files for each section
- `dist/` - Output directory for the built website (manually created by copying and replacing @@include directives)

## Development

This is a static HTML website that can be opened directly in a browser. For development:

1. Edit the partial files in the `partials/` directory
2. Manually process the @@include directives in `index.html` by copying content from partials
3. Save the final result in the `dist/` directory

## Deployment

The site is deployed using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

During deployment, the server directly serves the static HTML files. No build process is needed on the server since this is a simple static website.

## Security

This project follows security best practices:

- No hardcoded credentials in source code
- Using GitHub Secrets for sensitive information
- Proper .gitignore configuration to prevent sensitive files from being committed
- SSH-based deployment instead of password-based
- Non-root user for deployment operations

See [SECURITY.md](SECURITY.md) for detailed security analysis and best practices.

## Sections

- Header
- Hero
- Skills
- Projects & Services
- Experience
- Education
- Footer

Each section is contained in its own partial file for easier maintenance.