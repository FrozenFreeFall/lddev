export function filterProjects(projects, category = 'all') {
  return category === 'all' ? [...projects] : projects.filter(project => project.category === category);
}

export function selectMedia(project) {
  if (typeof project.video === 'string' && project.video.trim()) return { type: 'video', src: project.video };
  if (project.images?.length) return { type: 'gallery', images: project.images };
  return { type: 'illustration' };
}

export function contactLinks(contact) {
  return { email: `mailto:${contact.email}`, phone: `tel:${contact.phone}` };
}
