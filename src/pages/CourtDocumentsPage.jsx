import Timeline from '../components/Timeline'

const CourtDocumentsPage = () => {
  return (
    <div className='mt-8'>
      {/* Page lead */}
      <section className='container mx-auto mb-12 px-4 md:px-8'>
        <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug max-w-5xl opacity-90'>
          A chronological record of public court filings, press releases, and
          related documents from <span className='text-red'>United States v. Rodriguez and Hill</span>{' '}
          (SDNY 24-cr-82). Each entry links to the source document on the public record.
        </p>
        <p className='mt-4 font-mono text-sm sm:text-base lg:text-lg opacity-70 max-w-5xl'>
          Some scanned docket entries are image-only PDFs where operative text
          cannot be extracted; those entries are labeled honestly in their summary.
          Documents potentially touching sealed or third-party material are
          summarized structurally, not quoted.
        </p>
      </section>
      <Timeline />
    </div>
  )
}

export default CourtDocumentsPage
