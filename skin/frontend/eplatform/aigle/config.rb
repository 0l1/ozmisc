# ====================================================================
# Fichier  : config.rb
# Fonction : Fichier de configuration pour Compass
# Auteur   : Thierry Dulieu, The Other Store
# Version  : 1.1 (22/02/2014)
# ====================================================================


# ====================================================================
# Plugins Compass
# ====================================================================
# Chargement des plugins compatibles avec Compass. Ces plugins doivent
# être préalablement installés via gem install.
# ====================================================================
#require "susy"


# ====================================================================
# Options de Compass. Pour une liste complète des options, visiter :
# http://compass-style.org/help/tutorials/configuration-reference/
# ====================================================================

# Environnement de travail, :production (defaut) ou :development
# environment     = :production

# Renommage automatique des feuilles de sprites (troue ou false)
rename_sprites  = false

# Répertoire de stockage des fichiers source Sass/Compass
sass_dir        = "sass"

# Répertoire de stockage des css générées
css_dir         = "css"

# Répertoire de stockage des images
images_dir      = "images"

# Répertoire de stockage des polices de caractères
fonts_dir       = "fonts"

# Répertoire de stockage des fichiers JavaScript
javascripts_dir = "js"


# ====================================================================
# Ne modifiez les lignes ci-dessous que si vous savez exactement ce
# que vous faites (connaissance du langage Ruby requise).
# ====================================================================

# Utilisation de chemins relatifs dans les css générées
relative_assets = true

# Options dépendantes de l'environnement de travail
case environment
when :development
	output_style = :expanded
	line_comments = true
when :production
	output_style = :compressed
	line_comments = false
end
