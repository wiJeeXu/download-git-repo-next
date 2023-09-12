import download from 'download'

// download(
//   'https://github.com/vitejs/vite/archive/refs/heads/main.zip',
//   'test/temp'
// )

interface Option {
  clone?: boolean
}

function downloadGit(url: string, dest: string): void
function downloadGit(url: string, dest: string, option: Option): void
function downloadGit(
  url: string,
  dest: string,
  fn: (err?: unknown) => void
): void

function downloadGit(
  url: string,
  dest: string,
  option: Option,
  fn: (err?: unknown) => void
): void

function downloadGit(
  url: string,
  dest: string,
  optionOrFn?: Option | ((err?: unknown) => void) | null,
  fn?: (err?: unknown) => void
) {
  if (typeof optionOrFn === 'function') {
    fn = optionOrFn
    optionOrFn = null
  }
  optionOrFn = optionOrFn || {}
  const clone = optionOrFn.clone || false

  normalize(url)
  if (clone) {
  } else {
  }
}

function normalize(url: string) {
  const regex = /^(https):\/\/(github)(?:\.\w+)\/(.+)(?:#(.+))?$/
  const match = regex.exec(url)
  console.log(match)
  if (match) {
    const protocol = match[1]
    const type = match[2]
    let origin = null
    if (type === 'github') {
      origin = 'github.com'
    }
  }
}

export { downloadGit }
export default downloadGit
