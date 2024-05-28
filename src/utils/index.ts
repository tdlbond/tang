export const downloadFile = (val: string | Blob, fileName: string) => {
  const url = val instanceof Blob ? window.URL.createObjectURL(val) : val
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  val instanceof Blob && window.URL.revokeObjectURL(url)
}
