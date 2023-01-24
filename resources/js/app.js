import '../css/app.css'
import Alpine from 'alpinejs'

import theme from './components/app/theme'

Alpine.data('app', () => ({
  theme: theme(),
}))

Alpine.start()
