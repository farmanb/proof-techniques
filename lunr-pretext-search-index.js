var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "skeleton-proofs-2",
  "level": "1",
  "url": "skeleton-proofs-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Blake Farman Louisiana Tech University       Skeleton proofs for the standard proof techniques used in an introduction to proofs course, with worked examples.   "
},
{
  "id": "sec-direct",
  "level": "1",
  "url": "sec-direct.html",
  "type": "Section",
  "number": "1",
  "title": "Direct Proof",
  "body": " Direct Proof  Each of the proofs you have produced so far had the same format, which we refer to as a direct proof .   Proof of by Direct Proof  If you want to prove the implication via a direct proof, then the structure of the proof is as follows.  [State any upfront assumptions.] Assume .    [Use definitions and known results to derive ]    Therefore, .     If is an even integer, then is even.    Assume is even. By definition, there is an integer such that . Then   Since , it follows that is even.    "
},
{
  "id": "sec-direct-2",
  "level": "2",
  "url": "sec-direct.html#sec-direct-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof "
},
{
  "id": "example-direct",
  "level": "2",
  "url": "sec-direct.html#example-direct",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": "  If is an even integer, then is even.    Assume is even. By definition, there is an integer such that . Then   Since , it follows that is even.   "
},
{
  "id": "sec-contraposition",
  "level": "1",
  "url": "sec-contraposition.html",
  "type": "Section",
  "number": "2",
  "title": "Proof by Contraposition",
  "body": " Proof by Contraposition  If you want to prove a conditional proposition, you can prove its contrapositive instead. This approach is called a proof by contraposition .   Proof of by Contraposition  If you want to prove the implication by proving its contrapositive instead, then the structure of the proof is as follows.   [State any upfront assumptions.] We will utilize a proof by contraposition. Assume .    [Use definitions and known results to derive ]    Therefore, . We have proved the contrapositive, and hence if , then .     Let . If is odd, then is odd.    We will utilize a proof by contraposition. Assume is even. By definition, there is an integer such that . Then   so is even, i.e., is not odd. We have proved the contrapositive, and hence if is odd, then is odd.    "
},
{
  "id": "sec-contraposition-2",
  "level": "2",
  "url": "sec-contraposition.html#sec-contraposition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contraposition "
},
{
  "id": "example-contrapositive",
  "level": "2",
  "url": "sec-contraposition.html#example-contrapositive",
  "type": "Example",
  "number": "2.1",
  "title": "",
  "body": "  Let . If is odd, then is odd.    We will utilize a proof by contraposition. Assume is even. By definition, there is an integer such that . Then   so is even, i.e., is not odd. We have proved the contrapositive, and hence if is odd, then is odd.   "
},
{
  "id": "sec-contradiction",
  "level": "1",
  "url": "sec-contradiction.html",
  "type": "Section",
  "number": "3",
  "title": "Proof by Contradiction",
  "body": " Proof by Contradiction  Suppose that we want to prove some proposition (which might be something like or even more complicated). One approach, called proof by contradiction , is to assume and then logically deduce a contradiction of the form , where is some proposition. Since this is absurd, the assumption must have been false, so is true. The tricky part about a proof by contradiction is that it is not usually obvious what the statement should be.   Proof of by Contradiction  Here is what the general structure for a proof by contradiction looks like if we are trying to prove the proposition .   [State any upfront assumptions.] For sake of a contradiction, assume .    [Use definitions and known results to derive some and its negation .]    This is a contradiction. Therefore, .     There is no largest even integer.    For sake of a contradiction, assume that there is a largest even integer, say . Since is even, there is an integer such that , and so   is also even. Moreover, . This contradicts the assumption that is the largest even integer. Therefore, there is no largest even integer.    Proof by contradiction can be useful for proving statements of the form , where is easier to get your hands on, because is logically equivalent to .   Proof of by Contradiction  If you want to prove the implication via a proof by contradiction, then the structure of the proof is as follows.   [State any upfront assumptions.] For sake of a contradiction, assume and .    [Use definitions and known results to derive some and its negation .]    This is a contradiction. Therefore, if , then .     Let be a rational number and let be an irrational number. Then is irrational.    For sake of a contradiction, assume is rational, is irrational, and is rational. Since the difference of two rational numbers is rational,   is rational. This contradicts the assumption that is irrational. Therefore, if is rational and is irrational, then is irrational.     A direct proof is usually considered more elegant than a proof by contradiction, and you should generally prefer one when it is available. A telltale sign that a proof by contradiction was unnecessary is when, after assuming and , you derive and themselves as your contradiction that argument can usually be rewritten as a direct proof of . On the other hand, if the contradiction you reach involves some genuinely different from , a proof by contradiction was likely the right tool.    An Unnecessary Proof by Contradiction   If is an even integer, then is even.    For sake of a contradiction, assume is even and is odd. By definition, there is an integer such that . Then   so is even. This contradicts the assumption that is odd. Therefore, if is even, then is even.    Notice that the assumption (that is odd) was never actually used the computation shows is even using only (that is even). The contradiction we reached is exactly and , which is the telltale sign from that a direct proof was available all along. To transform this into a direct proof, delete the for sake of a contradiction framing and the assumption , and simply conclude with the fact that was derived:   Proof. Assume is even. By definition, there is an integer such that . Then   so is even.  This is precisely the direct proof given in .  "
},
{
  "id": "sec-contradiction-2",
  "level": "2",
  "url": "sec-contradiction.html#sec-contradiction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contradiction "
},
{
  "id": "example-contradiction-largest-even",
  "level": "2",
  "url": "sec-contradiction.html#example-contradiction-largest-even",
  "type": "Example",
  "number": "3.1",
  "title": "",
  "body": "  There is no largest even integer.    For sake of a contradiction, assume that there is a largest even integer, say . Since is even, there is an integer such that , and so   is also even. Moreover, . This contradicts the assumption that is the largest even integer. Therefore, there is no largest even integer.   "
},
{
  "id": "example-contradiction-irrational",
  "level": "2",
  "url": "sec-contradiction.html#example-contradiction-irrational",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": "  Let be a rational number and let be an irrational number. Then is irrational.    For sake of a contradiction, assume is rational, is irrational, and is rational. Since the difference of two rational numbers is rational,   is rational. This contradicts the assumption that is irrational. Therefore, if is rational and is irrational, then is irrational.   "
},
{
  "id": "note-elegance",
  "level": "2",
  "url": "sec-contradiction.html#note-elegance",
  "type": "Note",
  "number": "3.3",
  "title": "",
  "body": " A direct proof is usually considered more elegant than a proof by contradiction, and you should generally prefer one when it is available. A telltale sign that a proof by contradiction was unnecessary is when, after assuming and , you derive and themselves as your contradiction that argument can usually be rewritten as a direct proof of . On the other hand, if the contradiction you reach involves some genuinely different from , a proof by contradiction was likely the right tool.  "
},
{
  "id": "example-unnecessary-contradiction",
  "level": "2",
  "url": "sec-contradiction.html#example-unnecessary-contradiction",
  "type": "Example",
  "number": "3.4",
  "title": "An Unnecessary Proof by Contradiction.",
  "body": " An Unnecessary Proof by Contradiction   If is an even integer, then is even.    For sake of a contradiction, assume is even and is odd. By definition, there is an integer such that . Then   so is even. This contradicts the assumption that is odd. Therefore, if is even, then is even.   "
},
{
  "id": "sec-biconditionals",
  "level": "1",
  "url": "sec-biconditionals.html",
  "type": "Section",
  "number": "4",
  "title": "Proving Biconditionals",
  "body": " Proving Biconditionals  If we want to prove a biconditional of the form , we need to prove both and . You should always make it clear to the reader when you are proving each implication. One approach is to label each subproof with ( ) and ( ) (including the parentheses), respectively. Occasionally, you will discover that the proof of one implication is exactly the reverse of the proof of the other implication. If this happens to be the case, you may skip writing two subproofs and simply write a single proof that chains together each step using biconditionals. Such proofs will almost always be shorter, but can be challenging to write in an eloquent way. It is always a safe bet to write a separate subproof for each implication.  When proving each implication of a biconditional, you may choose to utilize a direct proof, a proof by contraposition, or a proof by contradiction. For example, you could prove the first implication using a proof by contradiction and a direct proof for the second implication.    Let . Then is even if and only if is even.    ( ) This is exactly the direct proof of : if is even, then is even.  ( ) This is exactly the contrapositive proof of : if is odd, then is odd, and this is equivalent to its contrapositive, if is even, then is even.  Since both implications hold, is even if and only if is even.    "
},
{
  "id": "example-biconditional",
  "level": "2",
  "url": "sec-biconditionals.html#example-biconditional",
  "type": "Example",
  "number": "4.1",
  "title": "",
  "body": "  Let . Then is even if and only if is even.    ( ) This is exactly the direct proof of : if is even, then is even.  ( ) This is exactly the contrapositive proof of : if is odd, then is odd, and this is equivalent to its contrapositive, if is even, then is even.  Since both implications hold, is even if and only if is even.   "
},
{
  "id": "sec-quantified",
  "level": "1",
  "url": "sec-quantified.html",
  "type": "Section",
  "number": "5",
  "title": "Quantified Statements",
  "body": " Quantified Statements  At this point, we should be able to use our understanding of quantification to construct counterexamples to complicated false propositions and proofs of complicated true propositions. Here are some general proof structures for various logical forms. Assume is the universe of discourse.   Direct Proof of  Here is the general structure for a direct proof of the proposition .  [State any upfront assumptions.] Let .    [Use definitions and known results.]    Therefore, is true. Since was arbitrary, for all , .     For every integer , is even.    Let . Note that is a product of two consecutive integers, so one of and is even; write that even factor as for some . Then , which is twice an integer. Therefore, is even. Since was arbitrary, for all , is even.    Combining with , we obtain the following skeleton proof.   Proof of  Below is the general structure for a direct proof of the proposition .   [State any upfront assumptions.] Let . Assume .    [Use definitions and known results to derive ]    Therefore, .     For every integer , if divides , then divides .    Let . Assume divides . By definition, there is an integer such that . Then   and since , it follows that divides .     Proof of by Contradiction  Here is the general structure for a proof of the proposition via contradiction.   [State any upfront assumptions.] For sake of a contradiction, assume that there exists such that .    [Do something to derive a contradiction.]    This is a contradiction. Therefore, for all , is true.     For every integer , .    For sake of a contradiction, assume that there exists such that . Since , we have . But there is no integer strictly between and . This is a contradiction. Therefore, for all , .     Direct Proof of  Here is the general structure for a direct proof of the proposition .  [State any upfront assumptions.]     [Use definitions, axioms, and previous results to deduce that an exists for which is true; or if you have an that works, just verify that it does.]    Therefore, there exists such that .     There exists an even prime number.    The number is prime, and is even. Therefore, there exists an even prime number.     Proof of by Contradiction  Below is the general structure for a proof of the proposition via contradiction.   [State any upfront assumptions.] For sake of a contradiction, assume that for all , .    [Do something to derive a contradiction.]    This is a contradiction. Therefore, there exists such that .     Among any three consecutive integers , at least one is divisible by .    For sake of a contradiction, assume that none of , , is divisible by . Every integer leaves a remainder of , , or upon division by ; since is not divisible by , either leaves remainder or remainder .    If leaves remainder , then leaves remainder , so divides .  If leaves remainder , then leaves remainder , so divides .    Either way, one of , , is divisible by , contradicting our assumption. Therefore, at least one of is divisible by .     A counterexample to a false statement is exactly a proof of , so it can be produced by following . Also, several of these skeleton proofs are sometimes combined in a single proof: for instance, to prove by contradiction, you would begin by assuming that there exists such that and .   "
},
{
  "id": "example-forall-direct",
  "level": "2",
  "url": "sec-quantified.html#example-forall-direct",
  "type": "Example",
  "number": "5.1",
  "title": "",
  "body": "  For every integer , is even.    Let . Note that is a product of two consecutive integers, so one of and is even; write that even factor as for some . Then , which is twice an integer. Therefore, is even. Since was arbitrary, for all , is even.   "
},
{
  "id": "example-forall-conditional",
  "level": "2",
  "url": "sec-quantified.html#example-forall-conditional",
  "type": "Example",
  "number": "5.2",
  "title": "",
  "body": "  For every integer , if divides , then divides .    Let . Assume divides . By definition, there is an integer such that . Then   and since , it follows that divides .   "
},
{
  "id": "example-forall-contradiction",
  "level": "2",
  "url": "sec-quantified.html#example-forall-contradiction",
  "type": "Example",
  "number": "5.3",
  "title": "",
  "body": "  For every integer , .    For sake of a contradiction, assume that there exists such that . Since , we have . But there is no integer strictly between and . This is a contradiction. Therefore, for all , .   "
},
{
  "id": "example-exists-direct",
  "level": "2",
  "url": "sec-quantified.html#example-exists-direct",
  "type": "Example",
  "number": "5.4",
  "title": "",
  "body": "  There exists an even prime number.    The number is prime, and is even. Therefore, there exists an even prime number.   "
},
{
  "id": "example-exists-contradiction",
  "level": "2",
  "url": "sec-quantified.html#example-exists-contradiction",
  "type": "Example",
  "number": "5.5",
  "title": "",
  "body": "  Among any three consecutive integers , at least one is divisible by .    For sake of a contradiction, assume that none of , , is divisible by . Every integer leaves a remainder of , , or upon division by ; since is not divisible by , either leaves remainder or remainder .    If leaves remainder , then leaves remainder , so divides .  If leaves remainder , then leaves remainder , so divides .    Either way, one of , , is divisible by , contradicting our assumption. Therefore, at least one of is divisible by .   "
},
{
  "id": "note-counterexample",
  "level": "2",
  "url": "sec-quantified.html#note-counterexample",
  "type": "Note",
  "number": "5.6",
  "title": "",
  "body": " A counterexample to a false statement is exactly a proof of , so it can be produced by following . Also, several of these skeleton proofs are sometimes combined in a single proof: for instance, to prove by contradiction, you would begin by assuming that there exists such that and .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
