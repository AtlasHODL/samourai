// Chronological timeline of public documents from the Samourai Wallet case
// (United States v. Rodriguez and Hill, SDNY 24-cr-82).
// Sources: samourai-wallet-timeline.md and public court filings via CourtListener/RECAP.
//
// Entries with `documents` (array) group related filings on the same date.
// Entries with `flags` include:
//   - "sealed-risk": document relates to material that may have been under seal;
//     summaries are kept structural and neutral.
//   - "needs-review": content could not be extracted from the PDF and the
//     summary should be verified or expanded by a human editor.

export const timeline = [
  {
    date: "2024-01-22",
    title: "Industry Letter to FinCEN on Section 311 Mixing NPRM",
    summary:
      "Samourai Wallet co-signs a comment letter with 25 other Bitcoin companies responding to FinCEN's Notice of Proposed Rulemaking that would designate convertible virtual currency mixing as a class of transactions of primary money-laundering concern under Section 311.",
    significance:
      "Industry record opposing the NPRM on the grounds that it conflates a technical process with a business model. FinCEN has not finalized the rule in the time since.",
    link: "https://bitcoinmagazine.com/legal/samourai-wallet-response-to-fincen-proposed-rules-for-bitcoin-mixing",
  },
  {
    date: "2024-02-14",
    title: "Superseding Indictment (Sealed)",
    summary:
      "A federal grand jury in the Southern District of New York returns a sealed superseding indictment charging Keonne Rodriguez and William Lonergan Hill with conspiracy to commit money laundering and conspiracy to operate an unlicensed money transmitting business.",
    significance:
      "First charging instrument in the case. Remains under seal until the day of the arrests.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.4.0.pdf",
  },
  {
    date: "2024-03-20",
    title: "Decentralized Whirlpool: Stage 1",
    summary:
      "Samourai Wallet blog post announcing a backend migration of its Whirlpool coinjoin service from a single central coordinator to a multi-coordinator architecture over Soroban, an encrypted Tor-based transport.",
    significance:
      "Last publicly announced protocol update before the arrests; documents the project's direction toward a decentralized coinjoin service.",
    link: "https://www.nobsbitcoin.com/whirlpool-dencetralization-stage-1/",
  },
  {
    date: "2024-04-24",
    title: "Order to Unseal Indictment — day of the arrests",
    summary:
      "The court unseals the superseding indictment. Coordinated arrests of Rodriguez (in Pennsylvania) and Hill (in Portugal) are carried out the same day; Samourai Wallet's domain and servers are seized.",
    significance:
      "Central event of the case. The indictment and the FBI's public service announcement warning against Samourai users enter the public record simultaneously.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.5.0.pdf",
  },
  {
    date: "2024-07-03",
    title: "Bail Package and Defense Team Appearances (Hill)",
    summary:
      "Notices of appearance by Nicholas R. Gersh and Roger A. Burlingame for William Lonergan Hill, together with a defense letter and supporting exhibits requesting pretrial release on a bail package.",
    significance:
      "Opens Hill's pretrial release litigation, filed while he remained in custody in Portugal.",
    documents: [
      {
        title: "Notice of Attorney Appearance (Nicholas R. Gersh)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.30.0.pdf",
      },
      {
        title: "Notice of Attorney Appearance (Roger A. Burlingame)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.31.0.pdf",
      },
      {
        title: "Letter Requesting Bail",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.32.0_1.pdf",
      },
      {
        title: "Exhibit A",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.32.1.pdf",
      },
      {
        title: "Exhibit B",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.32.2.pdf",
      },
      {
        title: "Exhibit C",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.32.3.pdf",
      },
    ],
  },
  {
    date: "2024-07-08",
    title: "Courtroom Designation and Notice of Appearance",
    summary:
      "Scheduling order designating the courtroom for the next day's hearing, together with a further notice of appearance (Jeffrey A. Brown) for Hill.",
    significance:
      "Administrative entries preceding Hill's initial appearance in SDNY.",
    documents: [
      {
        title: "Order",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.33.0.pdf",
      },
      {
        title: "Notice of Attorney Appearance (Jeffrey A. Brown)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.34.0.pdf",
      },
    ],
  },
  {
    date: "2024-07-09",
    title: "Initial Appearance, Brady Order, and Bond",
    summary:
      "Hill's initial appearance before the court. The court issues Brady / Rule 5(f) instructions to the parties. A $3 million bond is posted, secured by real property in Lisbon, Paris, and New York.",
    significance:
      "Hill enters the case on pretrial release; the Brady obligations are formally placed on the record and will become central to the 2025 disclosure dispute over the August 2023 FinCEN call.",
    documents: [
      {
        title: "Order",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.36.0_1.pdf",
      },
      {
        title: "Initial Appearance",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.37.0.pdf",
      },
      {
        title: "Bond",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.38.0.pdf",
      },
    ],
  },
  {
    date: "2024-07-10",
    title: "Status Conference",
    summary:
      "Ten-minute status conference before Judge Berman with Hill and counsel present. Sets a follow-up appearance for September 10, 2024 and excludes time under the Speedy Trial Act.",
    significance:
      "First scheduled status conference following Hill's initial appearance; begins the pattern of speedy-trial exclusions that recur through the case.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.39.0.pdf",
  },
  {
    date: "2024-07-19",
    title: "Notices of Filing of Official Transcripts",
    summary:
      "Two court-reporter notices that official transcripts have been filed in the case, with the standard seven-day redaction window running.",
    significance:
      "Administrative entries placing early hearing transcripts on the record.",
    documents: [
      {
        title: "Notice of Filing Transcript (Dkt. 43)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.43.0.pdf",
      },
      {
        title: "Notice of Filing Transcript (Conference of 7/10/2024, Dkt. 45)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.45.0.pdf",
      },
    ],
  },
  {
    date: "2024-08-12",
    title: "Government Letter Transmitting Proposed Protective Order",
    summary:
      "Letter from the U.S. Attorney's Office to Judge Berman transmitting a proposed protective order over discovery materials, citing the need to safeguard ongoing investigative information and personal information of third parties. Defense counsel has executed the proposed order.",
    significance:
      "Initiates the case's discovery-confidentiality regime, which later frames which materials the defense could file publicly and which required sealing.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.46.0.pdf",
  },
  {
    date: "2024-08-12",
    title: "Proposed Protective Order (Attachment)",
    summary:
      "Attachment to the government's August 12 letter. Defines categories of Disclosure Material, Sealed Material, Attorney's Possession Only (APO), and Attorney's Eyes Only (AEO) material, with handling and filing rules.",
    significance:
      "Sets the framework that governs how sensitive discovery can be used and filed in the case.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.46.1.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2024-08-13",
    title: "Protective Order",
    summary:
      "Protective order entered by the court governing the handling of discovery materials in the case, including categories for sealed, attorney-possession-only, and attorney-eyes-only material.",
    significance:
      "Formalizes the confidentiality regime that structures later sealing disputes and redaction practices.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.47.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2024-08-28",
    title: "Defense Letter Requesting Bond Modification",
    summary:
      "Letter from Hill's counsel asking the court to modify his bond conditions to allow travel from Lisbon to SDNY accompanied by his Portuguese counsel rather than U.S. defense counsel. Government and Pretrial Services do not object.",
    significance:
      "Housekeeping modification to Hill's travel conditions; illustrates the logistics of a defendant litigating the case from abroad.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.48.0.pdf",
  },
  {
    date: "2024-08-29",
    title: "Memo Endorsement Granting Bond Modification",
    summary:
      "Judge Berman's memo endorsement on the August 28 defense letter, granting the requested bond modification on consent.",
    significance:
      "Court's approval of the travel-escort modification.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.49.0.pdf",
  },
  {
    date: "2025-01-16",
    title: "Memo Endorsement Adjourning Status Conference",
    summary:
      "Defense letter requesting that the March 12, 2025 status conference be adjourned to March 18, 2025, endorsed and granted by the court the same day.",
    significance:
      "Sets the date for the next status conference.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.66.0.pdf",
  },
  {
    date: "2025-01-21",
    title: "Memo Endorsement",
    summary:
      "One-page memo endorsement. The docket PDF is image-only and no operative text is extractable.",
    significance: "Procedural entry.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.68.0.pdf",
    flags: ["needs-review"],
  },
  {
    date: "2025-03-17",
    title: "Notice of Appearance (AUSA Cecilia E. Vogel)",
    summary:
      "Notice of appearance by Assistant U.S. Attorney Cecilia E. Vogel on behalf of the government.",
    significance:
      "Expands the government's team of record ahead of pretrial motion practice.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.75.0.pdf",
  },
  {
    date: "2025-03-17",
    title: "Joint Status Letter",
    summary:
      "Joint letter from the parties updating the court on discovery, including additional batches produced since December 2024 and the status of encrypted devices seized from Rodriguez. Notes the defense's recent bill-of-particulars demand and the government's written response.",
    significance:
      "Snapshot of the discovery landscape in advance of the March 18 pretrial conference; signals the case is approaching pretrial motions.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.76.0.pdf",
  },
  {
    date: "2025-03-18",
    title: "Status Conference",
    summary:
      "Six-minute status conference before Judge Berman setting the pretrial motion schedule: defense motions due May 9, government response June 6, reply June 20, oral argument July 16.",
    significance:
      "First briefing schedule for pretrial motions, including the anticipated motion to dismiss.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.77.0.pdf",
  },
  {
    date: "2025-04-01",
    title: "Memo Endorsement",
    summary:
      "Two-page memo endorsement. The filing is image-only and its operative text is not extractable from the PDF.",
    significance:
      "Per later defense filings, this is the date on which the government made its Brady disclosure concerning the August 2023 FinCEN call that becomes a recurring dispute through the spring.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.81.0.pdf",
    flags: ["needs-review"],
  },
  {
    date: "2025-04-07",
    title: "Deputy Attorney General Memorandum: Ending Regulation by Prosecution (Blanche Memo)",
    summary:
      "Memorandum from Deputy Attorney General Todd Blanche to all Justice Department employees directing that the Department will no longer pursue actions against virtual currency exchanges, mixing and tumbling services, and offline wallets for acts of their end users or unwitting regulatory violations, and refocusing priorities on investor-victimization and illicit-finance cases.",
    significance:
      "External DOJ policy development that the defense subsequently invokes as grounds for dismissal; frames the political and legal backdrop of the case.",
    link: "https://www.justice.gov/dag/media/1395781/dl?inline",
  },
  {
    date: "2025-04-28",
    title: "Joint Letter Seeking Continuance of Motion Schedule",
    summary:
      "Joint letter from the parties asking for a sixteen-day continuance of the pretrial motion schedule so the government can evaluate the defense's April 10 request to dismiss the indictment under the Blanche Memo. Proposes motions May 29, responses June 26, replies July 10.",
    significance:
      "Extends the briefing calendar and places the Blanche Memo on the record as a disputed basis for potential dismissal.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.84.0.pdf",
  },
  {
    date: "2025-04-29",
    title: "Memo Endorsement on Motion-Schedule Continuance",
    summary:
      "Memo endorsement granting the parties' April 28 joint request to extend the pretrial motion schedule.",
    significance:
      "Adopts the revised schedule: motions May 29; responses June 26; replies July 10.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.85.0.pdf",
  },
  {
    date: "2025-05-05",
    title: "Defense Letter Requesting Hearing on Brady Disclosure",
    summary:
      "Letter from Rodriguez's and Hill's counsel requesting a hearing on the circumstances surrounding the government's April 1, 2025 disclosure of an August 23, 2023 call between prosecutors and FinCEN officials. The defense argues the disclosure was untimely under Brady and the court's Rule 5(f) order.",
    significance:
      "Opens the Brady dispute that runs through the spring and summer of 2025 and becomes a central defense theme.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.86.0.pdf",
  },
  {
    date: "2025-05-06",
    title: "Memo Endorsement on Brady Hearing Letter",
    summary:
      "Memo endorsement on the May 5 defense letter. Per later filings, the court directs the defense to raise the Brady issue in the pretrial motions rather than rule separately at this stage.",
    significance:
      "Routes the Brady dispute into the consolidated pretrial motion schedule.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.87.0.pdf",
  },
  {
    date: "2025-05-09",
    title: "Government Letter Opposing Brady Hearing",
    summary:
      "Government response to the defense's May 5 letter. Prosecutors argue that the April 1 disclosure regarding the August 2023 FinCEN call does not reflect a Brady violation, that the information was produced well ahead of trial, and that no hearing is warranted.",
    significance:
      "Frames the government's position in the Brady dispute.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.615996/gov.uscourts.nysd.615996.88.0.pdf",
  },
  {
    date: "2025-05-12",
    title: "Defense Reply Letter on Brady Hearing",
    summary:
      "Reply letter from Rodriguez's and Hill's counsel to the government's May 9 response, maintaining that the August 2023 FinCEN call is classic Brady material and that the year-long delay in disclosure warrants a hearing and possible sanctions.",
    significance:
      "Completes the initial three-letter exchange on the Brady issue before the court directs it into pretrial motion briefing.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.89.0.pdf",
  },
  {
    date: "2025-05-14",
    title: "Memo Endorsement Deferring Brady Motion to Pretrial Briefing",
    summary:
      "Memo endorsement directing the defense, per later filings, to raise the Brady issue in its pretrial motions rather than adjudicate it at this stage.",
    significance:
      "Consolidates the Brady dispute into the pretrial motion schedule.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.90.0.pdf",
  },
  {
    date: "2025-05-29",
    title: "Motion to Admit Anthony J. Franze Pro Hac Vice",
    summary:
      "Motion by attorney Anthony J. Franze of Arnold & Porter Kaye Scholer LLP for admission pro hac vice to appear as counsel for Rodriguez.",
    significance:
      "Expands Rodriguez's defense team as pretrial motions are filed.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.93.0.pdf",
  },
  {
    date: "2025-05-29",
    title: "Defendants' Motion to Dismiss Indictment",
    summary:
      "Joint defense memorandum of law moving to dismiss the indictment. The defense argues that Samourai Wallet is not a money transmitting business under 18 U.S.C. § 1960, that FinCEN guidance and a 2023 FinCEN call advised as much, that the charging theory deprives defendants of fair notice, and that the § 1956 money-laundering conspiracy count fails as a matter of law.",
    significance:
      "Principal pretrial challenge to the indictment; frames the core legal dispute about the reach of federal money-transmission law to non-custodial cryptocurrency software.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.615997/gov.uscourts.nysd.615997.95.0.pdf",
  },
  {
    date: "2025-05-29",
    title: "Defense Letter Motion on FinCEN Disclosure",
    summary:
      "Letter-motion by both defendants renewing their request for an order compelling disclosure of additional communications concerning the August 2023 FinCEN call and for a hearing on the circumstances and remedy for the delayed Brady production.",
    significance:
      "Preserves the Brady dispute as part of the pretrial motion record, as directed by the court's earlier endorsement.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.98.0.pdf",
  },
  {
    date: "2025-05-29",
    title: "Hill's Motion to Suppress (Notice of Motion)",
    summary:
      "Notice of motion by Hill to suppress evidence obtained from the seizure and search of his personal email account and, under Fed. R. Crim. P. 41(g), for return or destruction of non-responsive data.",
    significance:
      "Opens the Fourth Amendment challenge to the email search, one of Hill's principal pretrial motions.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.99.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-05-29",
    title: "Hill's Motion for a Separate Trial",
    summary:
      "Notice of motion by Hill under Rule 14(a) and the Fifth and Sixth Amendments, seeking severance of his trial from co-defendant Rodriguez on the ground that a joint trial would deprive him of the opportunity to call Rodriguez as a witness.",
    significance:
      "Initiates the severance dispute later decided by Judge Cote on July 23.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.102.0.pdf",
  },
  {
    date: "2025-05-29",
    title: "Memorandum of Law in Support of Hill's Severance Motion",
    summary:
      "Memorandum of law supporting Hill's motion to sever, arguing that Hill expects Rodriguez would offer exculpatory testimony about Samourai's design and legal review if tried first.",
    significance:
      "Sets out the defense theory for severance and previews potential advice-of-counsel themes.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.103.0.pdf",
  },
  {
    date: "2025-06-03",
    title: "Memo Endorsement on Amicus Participation",
    summary:
      "Memo endorsement on amici requests. Per later filings, the court denies proposed amici leave to file written briefs but leaves open the possibility of oral argument assistance at the motion-to-dismiss hearing.",
    significance:
      "Shapes the role of industry amici (DeFi Education Fund, Blockchain Association, Coin Center, Bitcoin Policy Institute, The Digital Chamber) in the motion-to-dismiss proceedings.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.106.0.pdf",
  },
  {
    date: "2025-06-06",
    title: "Amended Memorandum in Support of Motion to Dismiss",
    summary:
      "Amended joint defense memorandum in support of the motion to dismiss. Restates the arguments that Samourai Wallet is not a money transmitting business under § 1960, that FinCEN guidance advised as much, that defendants lacked fair notice, and that the § 1956 count is legally insufficient.",
    significance:
      "Operative motion-to-dismiss brief that the government answers and the court ultimately considers.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.107.0.pdf",
  },
  {
    date: "2025-06-24",
    title: "S3 Superseding Redacted Indictment",
    summary:
      "Third superseding indictment returned by the grand jury, filed in redacted form. Per the government's companion letter, the S3 indictment extends the charged conspiracy periods through the April 2024 arrests, removes one object from the § 1960 count, adds controlled-substance distribution as a specified unlawful activity under Count One, narrows the § 1956 financial-transaction theory, and adds factual allegations.",
    significance:
      "Operative charging instrument for trial; narrows and modifies the theories of liability without adding new counts.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.109.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-06-26",
    title: "Government Letter Summarizing S3 Superseding Indictment",
    summary:
      "Government letter to Judge Berman requesting arraignment on the S3 superseding indictment at the next conference and describing its scope: no new counts, extended conspiracy period, removed § 1960 object, added specified unlawful activity, narrowed § 1956 theory, new factual allegations.",
    significance:
      "Plain-language summary of the S3 indictment's changes; records the consent exclusion of speedy-trial time.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.116.0.pdf",
  },
  {
    date: "2025-06-26",
    title: "Government's Omnibus Opposition to Pretrial Motions",
    summary:
      "Eighty-three-page government brief opposing the defendants' pretrial motions. The government argues that Count Two (§ 1960 conspiracy) and Count One (§ 1956 conspiracy) are sufficiently pleaded, that Hill's motion to suppress and request for a Franks hearing should be denied, that Hill's severance motion should be denied, and that the defense demand for additional Brady-related disclosure and a hearing should be denied.",
    significance:
      "Consolidated government response to every pretrial motion; anchors the pretrial record on which Judges Berman and Cote act.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.118.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-07-03",
    title: "Notice of Appearance (Amici Counsel)",
    summary:
      "Notice of appearance by Daniel M. Vitagliano of Consovoy McCarthy PLLC as counsel for amici curiae DeFi Education Fund and Blockchain Association.",
    significance:
      "Formalizes industry amici's entry into the record ahead of the motion-to-dismiss argument.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.119.0.pdf",
  },
  {
    date: "2025-07-03",
    title: "Letter Motion for Amici Oral Argument",
    summary:
      "Letter motion by counsel for amici DeFi Education Fund, Blockchain Association, Coin Center, Bitcoin Policy Institute, and The Digital Chamber seeking leave to participate at the July 22 oral argument on the motion to dismiss. Defendants consent; the government states that amici participation is not necessary.",
    significance:
      "Seeks a voice for cryptocurrency-industry amici at the dispositive motion-to-dismiss argument.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.120.0.pdf",
  },
  {
    date: "2025-07-08",
    title: "Order Resetting Deadlines/Hearings",
    summary:
      "One-page scheduling order entered shortly before the case reassignment.",
    significance:
      "Routine scheduling order in the final week under Judge Berman.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.121.0.pdf",
  },
  {
    date: "2025-07-09",
    title: "Case Reassigned to Judge Denise L. Cote",
    summary:
      "The case is reassigned from Judge Richard M. Berman to Judge Denise L. Cote. No public document is entered on the docket beyond the reassignment notice.",
    significance:
      "Change in presiding judge two weeks before the motion-to-dismiss oral argument.",
    link: null,
  },
  {
    date: "2025-07-10",
    title: "Defendants' Reply Memorandum in Support of Motion to Dismiss",
    summary:
      "Joint defense reply brief responding to the government's opposition on whether Samourai Wallet is a money transmitting business under § 1960, the fair-notice argument, and the sufficiency of the § 1956 count. Case caption reflects reassignment to Judge Cote.",
    significance:
      "Closes the motion-to-dismiss briefing in advance of oral argument on July 22.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.123.0.pdf",
  },
  {
    date: "2025-07-14",
    title: "Speedy-Trial Exclusion (Letter and Endorsement)",
    summary:
      "Government letter to Judge Cote, with defense consent, asking the court to exclude time under the Speedy Trial Act until the July 22 arraignment on the S3 superseding indictment, endorsed and granted by the court the same day.",
    significance:
      "Bridges the speedy-trial clock across the scheduling gap created by the case reassignment.",
    documents: [
      {
        title: "Government Letter",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.124.0.pdf",
      },
      {
        title: "Memo Endorsement",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.125.0.pdf",
      },
    ],
  },
  {
    date: "2025-07-21",
    title: "Government Status Letter to Judge Cote",
    summary:
      "Government letter providing Judge Cote, following the reassignment, with procedural history, a summary of the charges, an overview of the S3 superseding indictment, the status of pretrial motions, and a trial plan. Notes thirteen batches of Rule 16 discovery produced and the government's anticipation of at least one further superseding indictment before trial.",
    significance:
      "Baseline briefing for the newly assigned trial judge; consolidates the procedural posture.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.126.0.pdf",
  },
  {
    date: "2025-07-22",
    title: "Disclosure",
    summary:
      "One-page disclosure filed on the date of the S3 arraignment and motion-to-dismiss argument before Judge Cote. PDF is image-only.",
    significance:
      "Filed in connection with the July 22 proceedings; substance not readable from the PDF.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.129.0.pdf",
    flags: ["sealed-risk", "needs-review"],
  },
  {
    date: "2025-07-23",
    title: "Government Letter on Speedy Trial Act Computation",
    summary:
      "Government letter to Judge Cote, as requested at the July 22 conference, reporting on Speedy Trial Act exclusions since April 29, 2024 and concluding that approximately four days have been deducted from the clock, with the remainder excluded through the November 3, 2025 trial date.",
    significance:
      "Establishes the speedy-trial baseline under the new trial judge.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.130.0.pdf",
  },
  {
    date: "2025-07-23",
    title: "Defense Letter Regarding Hill's Trial Return",
    summary:
      "Letter from Hill's counsel informing the court that Hill will return to the United States on October 20, 2025 in advance of the November 3 trial and will reside with family in Brooklyn during trial, consistent with existing pretrial-services practice.",
    significance:
      "Resolves a logistical question raised by the court regarding Hill's presence for trial.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.131.0.pdf",
  },
  {
    date: "2025-07-23",
    title: "Memo Endorsement (Dkt. 132)",
    summary:
      "One-page memo endorsement filed July 23, 2025. PDF is image-only with no extractable body text.",
    significance:
      "Companion to other July 23 filings; substance not readable from the PDF.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.132.0.pdf",
    flags: ["needs-review"],
  },
  {
    date: "2025-07-23",
    title: "Memorandum Opinion and Order Denying Severance",
    summary:
      "Memorandum opinion and order by Judge Cote denying Hill's motion to sever his trial from Rodriguez's. Applying the Second Circuit's four-factor test, the court concludes that Hill has not shown Rodriguez would testify at a severed trial, that any such testimony would be cumulative and not clearly exculpatory, that judicial economy favors a joint trial, and that the proposed testimony would be subject to substantial impeachment.",
    significance:
      "First substantive pretrial ruling from Judge Cote; keeps the case on track for a single joint trial on November 3.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.133.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-07-25",
    title: "Memorandum of Law in Support of Hill's Motion to Suppress (Public Version)",
    summary:
      "Memorandum of law supporting Hill's motion to suppress evidence obtained through the seizure and search of his personal email account. The defense argues that the supporting affidavit contained false or misleading statements, lacked probable cause, was impermissibly overbroad under the Fourth Amendment, and that the good-faith exception does not apply.",
    significance:
      "Public version of Hill's suppression brief, refiled with redactions after coordination with the government under the protective order.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.136.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-07-25",
    title: "Defense Letter on Sealing and Redactions",
    summary:
      "Defense letter reporting, at the court's direction, that after coordination with the government the suppression-motion materials can be placed on the public docket with limited redactions of personal email addresses, telephone numbers, names of non-parties, cryptocurrency wallet addresses, and certain subscriber information and web-search data from Hill's personal email account.",
    significance:
      "Establishes the narrowed public-redactions framework for the suppression record in response to the court's direction at the July 22 hearing.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.138.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-07-29",
    title: "Order Resetting Hearings and Terminating Motions",
    summary:
      "One-page order by Judge Cote. PDF is image-only.",
    significance:
      "Clears the motion docket and sets hearing dates in the final pretrial run-up.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.141.0.pdf",
  },
  {
    date: "2025-07-30",
    title: "Orders by Judge Cote",
    summary:
      "Two orders by Judge Cote filed July 30, 2025. Both PDFs are image-only with no extractable body text.",
    significance:
      "Pretrial orders following the severance and suppression rulings; substance not readable from the PDFs.",
    documents: [
      {
        title: "Order (Dkt. 143)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.143.0.pdf",
      },
      {
        title: "Order (Dkt. 144)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.144.0_1.pdf",
      },
    ],
    flags: ["needs-review"],
  },
  {
    date: "2025-08-07",
    title: "Transcript of July 22, 2025 Proceedings",
    summary:
      "Official transcript of the July 22, 2025 proceedings before Judge Cote, including the arraignment of both defendants on the S3 superseding indictment, the exclusion of speedy-trial time through the November 3 trial date, and discussion of pretrial motions and scheduling. The court-reporter notice of filing is filed the same day.",
    significance:
      "First on-the-record proceedings before the trial judge; confirms the trial date and plea posture.",
    documents: [
      {
        title: "Transcript",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.145.0.pdf",
      },
      {
        title: "Notice of Filing Transcript",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.146.0.pdf",
      },
    ],
  },
  {
    date: "2025-10-08",
    title: "Notice of Filing of Official Transcript",
    summary:
      "Court-reporter notice that an official transcript has been filed on October 8, 2025, with the standard redaction window.",
    significance:
      "Places a further on-the-record proceeding into the public docket during the final pretrial period.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.150.0.pdf",
  },
  {
    date: "2025-10-31",
    title: "Government's Sentencing Memorandum",
    summary:
      "Government sentencing memorandum filed in advance of the scheduled sentencings of Rodriguez and Hill. The government argues for a sentence of sixty months' imprisonment for each defendant and sets out its view of the offense conduct and sentencing factors under 18 U.S.C. § 3553(a).",
    significance:
      "Frames the government's sentencing position. This submission is re-entered on the docket shortly before sentencing.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.157.0.pdf",
    flags: ["sealed-risk"],
  },
  {
    date: "2025-11-05",
    title: "Order Resetting Deadlines/Hearings",
    summary:
      "One-page scheduling order by Judge Cote resetting sentencing-phase deadlines or hearings. PDF is image-only.",
    significance:
      "Adjusts the sentencing-phase calendar.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.158.0.pdf",
  },
  {
    date: "2025-11-19",
    title: "Order",
    summary:
      "Two-page order by Judge Cote filed November 19, 2025. PDF is image-only.",
    significance:
      "Entered in the final week before the November 20 Judgment; substance not readable from the PDF.",
    link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.162.0.pdf",
    flags: ["needs-review"],
  },
  {
    date: "2025-11-20",
    title: "Judgment",
    summary:
      "Judgment entered on the docket following sentencing before Judge Denise L. Cote. Rodriguez was sentenced on November 6, 2025 to five years' imprisonment; Hill was sentenced on November 19, 2025 to four years' imprisonment. Each defendant received three years of supervised release, a $250,000 fine, and a forfeiture order of $237,832,360.55, with $6,367,139.69 credited toward partial satisfaction.",
    significance:
      "Final disposition of the case before the trial court.",
    documents: [
      {
        title: "Judgment (docket PDF)",
        link: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.620167/gov.uscourts.nysd.620167.163.0.pdf",
      },
      {
        title: "DOJ press release (SDNY)",
        link: "https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years",
      },
      {
        title: "IRS Criminal Investigation announcement",
        link: "https://www.irs.gov/compliance/criminal-investigation/founders-of-samourai-wallet-cryptocurrency-mixing-service-sentenced-to-five-and-four-years-in-prison",
      },
    ],
  },
];
