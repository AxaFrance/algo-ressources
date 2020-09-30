import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

@RunWith(Parameterized::class)
class StringContainsPalindromeTest(private val input: String, private val start: Int, private val end: Int, private val expected: Boolean) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("abba", 0, 3, true),
                arrayOf("abba", 0, 1, true),
                arrayOf("abba", 1, 2, true),
                arrayOf("abba", 2, 3, true),
                arrayOf("aba", 0, 2, true),
                arrayOf("1aba", 1, 3, true),
                arrayOf("1aba2", 1, 3, true),
                arrayOf("1abba", 1, 4, true),
                arrayOf("1abba2", 1, 4, true),

                arrayOf("abba", 0, 2, false),
                arrayOf("abba", 1, 3, false),
                arrayOf("abaaab", 0, 5, false),
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.containsPalindrome(start, end))
    }
}

@RunWith(Parameterized::class)
class StringExpandPalindromeTest(private val input: String, private val start: Int, private val end: Int, private val expected: PalindromePositions?) {

    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("1aba2", 2, 2, PalindromePositions(1, 3)),
                arrayOf("1abcd", 1, 1, PalindromePositions(1, 1)),
                arrayOf("1aba1", 2, 2, PalindromePositions(0, 4)),
                arrayOf("1aba1", 3, 3, PalindromePositions(3, 3)),
                arrayOf("1aba1", 1, 3, PalindromePositions(0, 4)),
                arrayOf("1aba1", -2, 1, null),
                arrayOf("1aba1", 1, 5, null),
                arrayOf("1aba1", 2, 4, null),
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.expandPalindrome(start, end))
    }
}

@RunWith(Parameterized::class)
class StringFindLongestSubPalindromesTest(private val input: String, private val expected: Set<PalindromePositions>) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("aa", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(0, 1),
                )),
                arrayOf("abc", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(2, 2),
                        PalindromePositions(0, 1),
                        PalindromePositions(1, 2),
                )),
                arrayOf("1aba2", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(3, 3),
                        PalindromePositions(4, 4),

                        PalindromePositions(0, 1),
                        PalindromePositions(1, 2),
                        PalindromePositions(2, 3),
                        PalindromePositions(3, 4),

                        PalindromePositions(1, 3),
                )),
                arrayOf("aba", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(2, 2),

                        PalindromePositions(0, 1),
                        PalindromePositions(1, 2),

                        PalindromePositions(0, 2),
                )),
                arrayOf("abba", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(2, 2),
                        PalindromePositions(3, 3),

                        PalindromePositions(0, 1),
                        PalindromePositions(2, 3),

                        PalindromePositions(0, 3),
                )),
                arrayOf("abaaab", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(2, 2),
                        PalindromePositions(4, 4),
                        PalindromePositions(5, 5),

                        PalindromePositions(0, 1),
                        PalindromePositions(2, 3),
                        PalindromePositions(3, 4),
                        PalindromePositions(4, 5),

                        PalindromePositions(0, 2),
                        PalindromePositions(0, 3),

                        PalindromePositions(1, 5),
                ))
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.findLongestSubPalindromes())
    }
}

@RunWith(Parameterized::class)
class SetPalindromePositionsFilterOverlappingPositionsTest(private val input: String, private val expected: List<PalindromePositions>) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("1aba2", listOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 3),
                        PalindromePositions(4, 4)
                )),
                arrayOf("abaaaba2baababab", listOf(
                        PalindromePositions(0, 2),
                        PalindromePositions(3, 10),
                        PalindromePositions(11, 15),
                )),
                arrayOf("abaaaaaa", listOf(
                        PalindromePositions(0, 1),
                        PalindromePositions(2, 7),
                )),
                arrayOf("", listOf<PalindromePositions>())
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.findLongestSubPalindromes().filterOverlappingPositions())
    }
}

@RunWith(Parameterized::class)
class CutInPalindromesTest(private val input: String, private val K: Int, private val expected: String) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("uvxuuxvvhikinwnjponopjfd", 10, "u v xuux vv h iki nwn jponopj f d"),
                arrayOf("abacdc", 3, null),
                arrayOf(
                        "pfnyfltnlplvyuzccyqyxryhpkzipekqhsmsstbmpygqafmzisccfccsizmfaqqqqafmzisccfccsizmfaqgywwvwwygqafmzisccfccsizmfaqqqqddddqqqqafmzisccfccsizmzzlzzmzisccfccsizmfaqqqqddddqqqqafmiiiiimfaqqqqddddssssssddddqqqqafmiiiiimfaqqqqddddqqqqafmzisccnrmfmrnccsizmfaqqqqddddqqqqafmiiiiimfaqxxxnxxnxxxqafmiiiiimfaqqqqddddqqjjmjjqqdssssssdqqjjmjjqrrrrdrrrrqjjmjjhhhhhhhhjjmjjqrrrrdrrrruuuauuurrrrdrrrrqjjmjjhhhhhhhhjjmjjqrrrrdrrrnnnnnnnnnnrrrdrrrrqjjmjjhhhkkklkkkhhhjjmjjqrrrrdrrrnnnnnnnnnnrrrdrrkkkkrrdrrrnnnnnnnnnnrrrdrrrrqjttttjqrrrrdrrrnnnnnnnnnaaaannnnnnnnnrddddtddddrnnnnnnnnnaaypppzpppyaannnmiiiriiimnnnaaypppzpppyaannnnnbbbbbbnnnnnaaypppzpppyaannnmiiiriwwwwwwiriiimnnoohqhoonnmiiiriwwwwwwiriiimnnnaaypppzvvivvzpppyvvrvvypppzvvivvzpppyaannnmiiiriwwwwwwiccecciwwwwwwiriiimnnnaaypppzvvivvzppuuujuuuppzvvivvzpppyaannnmiiirwwwwywwwwriiimnnnaaypppzvvivvzppuuujuuuzzzzzqzzzzzuuujuuuppzvvivvzpppyaannnmiiirwwwwppppppppppwwwwriiimnnnaaypppzvvivvzppuxkxxxxxxkxuppppdppppqqbqqppppdppppuxkxxxxxxkxuppzvvjjjjhjjjjvvzppuxkxxxxxxkxuggpgguxkxxxxxxkxuppzvvjjjjhjjjjvvzppuxxxxxxxxxxxxuppzvvjjjjhjttttvttttjhjjjjvvztttztttzvvjjjjhjttttvttttjhjjjjvvzppummmmymmmmuppzvvjjjjhjttttvttttrrsrrttttvttttjhjjjjvvzppummmmymmmmuppyyygyyyppuffffuppyyygyyyppummmbbbbmmmuppyyygyyyppwwwiwwwppyyygyyyppummmbbbbmmmiiiifiiiimmmbbbbmbbbqbbbmbbbbmmmiiiifiiiimmmvvvvvvvvmmmikikikikimmmvvvvvvvvmmmiiiifiiiffffzffffiiifieeeeeeeeifiiiffffzffffiiooooxooooiiffffzffffiiifieeeuquuqueeeifiiiffffzffffiiooooxooooiiffqqqqqfqqqqqffiiooooxooooiiffffzffffiiifieelulwhwluleeifiiiffffzffeeedeeeffzffffiiifieelulwvvvvvvvvwluleeifiiifffffgfffffiiifieelulwvvvffffeffffvvvwluleeifiiiffuuuuffiiifieelulwvvvffffeffffvvvwlulebbbbbbbbelulwvvvffffeffffviiiiiiiivffffeffffpppppdpppppffffeffffviiiiiiiddddhddddiiiiiiivffffeffffpppppdpppppffeeeeeeeeffpppppdfzvzfdpppppffeeeeeeeeffpppppdpppppffffeaawaaeeemeeeaawaaeffffpppppdpppppffeeeeeeepppppdpppppeeeeeeeffpppppdpppppffffvffffpppppdpppppffeeekzzkeeeffppppmvmmvmppppffeeekzzkeeeffpppppdppphhhhzhhhhpppdpppppffeeekzzkeeeffppppmvmmvmpprrrrrrrrppmvmmvmppppffeeekzzkeeeffpppppdwwwowowwwdpppppffexxxxxqxxxxxeffpppqqqqzqqqqpppffexxxxxqxxxxxeffpppppdwwwfkkfwwwdpppppffexxxxxqzzszzqxxxxxeffpppppdwwwfkkfwwwwwwwwwwwwwwfkkfwwwdpppppffexxxxxqzzszzqxxggjggggjggxxqzzszzqxxxxxvvvvsvvvvxxxxxqzzszzqxxggjggggjggxxqztttttttzqxxggjggggjggxxxxxoxxxxxggjggggjggxxqztttttttzqxxfxxqztttttttzqxxggzzzczzzggxxqztttttttzqxxfxxqztttttyyygyyytttttzqxxfxxqzuuuuuuzqxxllllllxxqzuuuuuuzqffffiffffqzuuuuuuzqxxllllllxxqzuuuuuuzqxxfxxqbbsbbsbbqxxfxxqzuuuuuuzqxxllllllxxqzuuuuuuzrrrnrrrzuuuuuuzqxxllllllxxccccccccccxmmmmxccccccccccxxllllllxxqzuuuuuuzrrrnrrrdddfdddrrrnrrraaaaalaaaaarrrpppoppprrraaaaalaaaaarrrnaaaagaaaanrrrccctcccrrrnaaaagaaaanrrraaaaalaaaaarrrnnnnrrraaaaalxxxxxxxxxxlaaaaarrrnnnnnpnnnnnrrraaaaalxxxxffffkffffxxxxlaaaaarrrnnnnnpnnnnnrrraaaaalxxxxxeeeneeexxxxxlhhheccehhhlxxxxxeeeneeexxxllllxxxeeeneeexxxxxlhhheccesswsseccehhhlxxxxxeeenennnnnjnnnnneneeexxxxxlhhhecciiiiiiiiiiccehhpppphhecciiiiiiiiiicuuuuuruuuuuciiiiiiiiiiccehhpppphhecciiiijjjvjjjiiiiccehttgtthecciiiijjjvjjjiiiiccehhpppphhecciiiiiiiffllllffiiiiiiiccehhpppphhecciiiijjjvjjjiooiooijjjvjjjiiijjjjjjjjiiijjjvjjjioffiffoijjjvjjjiiijjjjjjjjiiijjjvjjjiooiooeeeeooiooijjjvjjjiiijjjjjjjjiiijjjvjjjittittijjjttdttjjjittittijjjvjjjiiijjjjjoooookooooojjjjjiiijjjvjjjittittijjjttdttjjjittiqqtqqittijjjttdttjjjittittijjjvjkxxkjvjjjittittijjjttdttjjjittiqjjjjjjjjqittijjjttdttjjjittittijjjvjkxxkjvjeeeeeyeeeeejvjkxxkjvjjjittittijjjttdttjjjittiqjabbjbbajqittijjjttdttjjjitbbbbbbtijjjttdttjjyyyjyyyjjttdttjjjitbbbbbbtiffffcffffitbbbbbbtijjjttaaajaaattjjjitbbbbbbtiffffcmmmmwmmmmcffffitbbbbbbtijjjttaaajallxotoxllajaaattjaaaalaaaajssssfssssjoonoonoojssssfssssjaaaalaaaajttaaajallxotoxllajakkkkajallxotoxllajaaattjaaaalaaaajssssfssssxxnxxssssfssssjaaaaiiiiiiaaaajssssfssssxxnxxssssfssssjaaaaeeeeeeaaaajssssfssssxxnxxssssfssssjaaaaaaaaaajssccccrccccsqqeqqsccaaaaaaaaccsqqeqqsccccrccccssjaaaaaaaaaajssssfshhhhhhhhhhsfssssjaaaaaaaaaajsscchhhzhhhccssjaaaaaaaaaajssssfshhhhhhhhhhsfsttttggttttsfddddddfsuuuuseeeesuuuusfddddddfstfffffffftsfddddddfsuuuuseeeesuuuusfddddddfstttlllllllltttsfddddddfsuuuuddddbdddduuuusfdddiiiiiyiiiiidddfsuuuuddddbdddduuuusfddddddfstttrrrrrrtttsfddddddfsuuuuddddbdddduhhhjhhhuddddbdddduuuusfdddddduuuuuuuuddddddfsuuuuddddbdddduhhhjhhhurrryrrruhhhjhhhuddddbdddduuuusbbbbbbbbbbsuuuueeedeeeubbbbbbueennnnnnnneeubbbbzzzzzzzzbbbbueennnnnnnneeubbbbbbueegggggsgggggeeubbbbbbuzzzzzzubbbbbbueegggggsgggggeeubbbbbbueennnhttttutttthnnneeubbbbbbueegggggcccttcccgggggeeubbbbbssssbbbbbueeggkkkkkkggeeubbbbbzzwzzbbbbbueeggkkkkkkggeeuffffffueeggkkkkeeeeebeeeeekkkkggeeuffffffueeggkkkkkkggeeubbbbyyyyysyyyyybbbbueooonoooeubbbbyyyvvvvyvvvvyyybbbbueooonoooeubbbbyyyyuuuuuuuuuuyyyybbbbueooonoooeubbbbyymmfmmyynnvvcvvnnyymmfmmyybbbbueooonoooeubbbbyyyyuuuuuullllqlllluuuuuuyyyybbbbuhhohhohhubbbbyyyyuuuuuullllqlllluuuuaaaaayaaaaauuuulllttttttttllluuuurrnnnnnnrruuuulllttttttttlllhhhhhhhhhhlllttttttttllluuuurrnnnnbwwwhwwwbnnnnrruuuulllttttttttlllhhhhhhhhhhllzzzzllhhhhhhhhhhllltttttttaacaattttt",
                        198,
                        "p f n y f l t n lpl v y u z cc yqy x r y h p k z i p e k q h sms s t b m p y g qafmzisccfccsizmfaq qqqafmzisccfccsizmfaqgywwvwwygqafmzisccfccsizmfaqqq qddddqqqqafmzisccfccsizmzzlzzmzisccfccsizmfaqqqqddddq qqqafmiiiiimfaqqqqddddssssssddddqqqqafmiiiiimfaqqq qddddqqqqafmzisccnrmfmrnccsizmfaqqqqddddq qqqafmiiiiimfaqxxxnxxnxxxqafmiiiiimfaqqq qddddq qjjmjjqqdssssssdqqjjmjjq r rrrdrrrrqjjmjjhhhhhhhhjjmjjqrrrrdrrrruuuauuurrrrdrrrrqjjmjjhhhhhhhhjjmjjqrrrrdrrr nnnnnnnnnnrrrdrrrrqjjmjjhhhkkklkkkhhhjjmjjqrrrrdrrrnnnnnnnnnn rrrdrrkkkkrrdrrr n nnnnnnnnnrrrdrrrrqjttttjqrrrrdrrrnnnnnnnnn aa aannnnnnnnnrddddtddddrnnnnnnnnnaa ypppzpppyaannnmiiiriiimnnnaaypppzpppy aannnnnbbbbbbnnnnnaa ypppzpppy aannnmiiiriwwwwwwiriiimnnoohqhoonnmiiiriwwwwwwiriiimnnnaa ypppzvvivvzpppyvvrvvypppzvvivvzpppy aannnmiiiriwwwwwwiccecciwwwwwwiriiimnnnaa ypppzvvivvzppuuujuuuppzvvivvzpppy aannnmiiirwwwwywwwwriiimnnnaa ypppzvvivvzppuuujuuuzzzzzqzzzzzuuujuuuppzvvivvzpppy aannnmiiirwwwwppppppppppwwwwriiimnnnaa y p ppzvvivvzpp uxkxxxxxxkxuppppdppppqqbqqppppdppppuxkxxxxxxkxu ppzvvjjjjhjjjjvvzppuxkxxxxxxkxuggpgguxkxxxxxxkxuppzvvjjjjhjjjjvvzpp uxxxxxxxxxxxxu ppzvvjjjjhjttttvttttjhjjjjvvztttztttzvvjjjjhjttttvttttjhjjjjvvzpp ummmmymmmmuppzvvjjjjhjttttvttttrrsrrttttvttttjhjjjjvvzppummmmymmmmu ppyyygyyyppuffffuppyyygyyypp u mmmbbbbmmmuppyyygyyyppwwwiwwwppyyygyyyppummmbbbbmmm iiiifiiiimmmbbbbmbbbqbbbmbbbbmmmiiiifiiii mmmvvvvvvvvmmmikikikikimmmvvvvvvvvmmm iii ifiiiffffzffffiiifi eeeeee eeifiiiffffzffffiiooooxooooiiffffzffffiiifiee euquuque eeifiiiffffzffffiiooooxooooiiffqqqqqfqqqqqffiiooooxooooiiffffzffffiiifiee lulwhwlul eeifiiiffffzffeeedeeeffzffffiiifiee lul w vvvvv vvvwluleeifiiifffffgfffffiiifieelulwvvv ffffeffffvvvwluleeifiiiffuuuuffiiifieelulwvvvffffeffff vvvwlulebbbbbbbbelulwvvv ffffeffffviiiiiiiivffffeffff pppppdpppppffffeffffviiiiiiiddddhddddiiiiiiivffffeffffpppppdppppp ffeeeeeeeeffpppppdfzvzfdpppppffeeeeeeeeff pppppdpppppffffeaawaaeeemeeeaawaaeffffpppppdppppp ffeeeeeeepppppdpppppeeeeeeeff pppppdpppppffffvffffpppppdppppp ffeeekzzkeeeffppppmvmmvmppppffeeekzzkeeeff pppppdppphhhhzhhhhpppdppppp ffeeekzzkeeeffppppmvmmvmpprrrrrrrrppmvmmvmppppffeeekzzkeeeff pppppdwwwowowwwdppppp ffexxxxxqxxxxxeffpppqqqqzqqqqpppffexxxxxqxxxxxeff pppppdwwwfkkfwwwdppppp ff e xxxxx qzzszzqxxxxxeffpppppdwwwfkkfwwwwwwwwwwwwwwfkkfwwwdpppppffexxxxxqzzszzq xxggjggggjggxxqzzszzqxxxxxvvvvsvvvvxxxxxqzzszzqxxggjggggjggxx qztttttttzqxxggjggggjggxxxxxoxxxxxggjggggjggxxqztttttttzq xxfxxqztttttttzqxxggzzzczzzggxxqztttttttzqxxfxx qztttttyyygyyytttttzq xxfxxqzuuuuuuzqxxllllllxxqzuuuuuuzqffffiffffqzuuuuuuzqxxllllllxxqzuuuuuuzqxxfxx qbbsbbsbbq xxfxx q zuuuuuuzqxxllllllxxqzuuuuuuz rrrnrrrzuuuuuuzqxxllllllxxccccccccccxmmmmxccccccccccxxllllllxxqzuuuuuuzrrrnrrr dddfddd rrrnrrr aaaaalaaaaarrrpppoppprrraaaaalaaaaa rrrnaaaagaaaanrrrccctcccrrrnaaaagaaaanrrr aaaaa laaaaarrrnnnnrrraaaaal xxxxxxxxxx laaaaarrrnnnnnpnnnnnrrraaaaalxxxxffffkffffxxxxlaaaaarrrnnnnnpnnnnnrrraaaaal xxxxxeeeneeexxxxx l hhh eccehhhlxxxxxeeeneeexxxllllxxxeeeneeexxxxxlhhhecce sswss e ccehhhlxxxxxeeenennnnnjnnnnneneeexxxxxlhhhecc iiiiii iiiiccehhpppphhecciiiiiiiiiicuuuuuruuuuuciiiiiiiiiiccehhpppphhecciiii jjjvjjjiiiiccehttgtthecciiiijjjvjjj iiiiccehhpppphhecciiiiiiiffllllffiiiiiiiccehhpppphhecciiii jjjvjjjiooiooijjjvjjj iiijjjjjjjjiiijjjvjjjioffiffoijjjvjjjiiijjjjjjjjiii jjjvjjjiooiooeeeeooiooijjjvjjj iiijjjjjjjjiii jjjvjjj ittitti jjjttdttjjjittittijjjvjjjiiijjjjjoooookooooojjjjjiiijjjvjjjittittijjjttdttjjj ittiqqtqqitti jjjttdttjjjittittijjjvjkxxkjvjjjittittijjjttdttjjj ittiqjjjjjjjjqitti jjjttdttjjjittittijjjvjkxxkjvjeeeeeyeeeeejvjkxxkjvjjjittittijjjttdttjjj ittiqjabbjbbajqitti jjjttdttjjj itbbbbbbtijjjttdttjjyyyjyyyjjttdttjjjitbbbbbbti ffffcffff itbbbbbbtijjjttaaajaaattjjjitbbbbbbti ffffcmmmmwmmmmcffff itbbbbbbti jjj ttaaajallxotoxllajaaatt jaaaalaaaajssssfssssjoonoonoojssssfssssjaaaalaaaaj ttaaajallxotoxllajakkkkajallxotoxllajaaatt jaaaalaaaaj ssssfssssxxnxxssssfssssjaaaaiiiiiiaaaajssssfssssxxnxxssssfssss jaaaaeeeeeeaaaaj ssssfssssxxnxxssssfssss jaaaaaaaaaajssccccrccccsqqeqqsccaaaaaaaaccsqqeqqsccccrccccssjaaaaaaaaaaj sss sfshhhhhhhhhhsfssssjaaaaaaaaaajsscchhhzhhhccssjaaaaaaaaaajssssfshhhhhhhhhhsfs ttttggtttt sfddddddfsuuuuseeeesuuuusfddddddfstfffffffftsfddddddfsuuuuseeeesuuuusfddddddfs tttllllllllttt sfddddddfsuuuuddddbdddduuuusfdddiiiiiyiiiiidddfsuuuuddddbdddduuuusfddddddfs tttrrrrrrttt sfddddddfs uuuuddddbdddduhhhjhhhuddddbdddduuuu sfdddddduuuuuuuuddddddfs uuuuddddbdddduhhhjhhhurrryrrruhhhjhhhuddddbdddduuuu sbbbbbbbbbbs uuu ueeedeeeu bbbbbbueennnnnnnneeubbbbzzzzzzzzbbbbueennnnnnnneeubbbbbb ueegggggsgggggeeubbbbbbuzzzzzzubbbbbbueegggggsgggggeeu bbbbbbueennnhttttutttthnnneeubbbbbb ueegggggcccttcccgggggeeu bbbbbssssbbbbb ueeggkkkkkkggeeubbbbbzzwzzbbbbbueeggkkkkkkggeeu ffffffueeggkkkkeeeeebeeeeekkkkggeeuffffff ueeggkkkkkkggeeu bbbbyyyyysyyyyybbbb ueooonoooeubbbbyyyvvvvyvvvvyyybbbbueooonoooeu bbbb yyyy uuuu uuuuuuyyyybbbbueooonoooeubbbbyymmfmmyynnvvcvvnnyymmfmmyybbbbueooonoooeubbbbyyyyuuuuuu llllqlllluuuuuuyyyybbbbuhhohhohhubbbbyyyyuuuuuullllqllll uuuuaaaaayaaaaauuuu lllttttttttllluuuurrnnnnnnrruuuulllttttttttlll hhhhhhhhhhlllttttttttllluuuurrnnnnbwwwhwwwbnnnnrruuuulllttttttttlllhhhhhhhhhh llzzzzll hhhhhhhhhh lll tt tttttaacaattttt"
                ),
                arrayOf(
                        "jfsqiodxhzturkgkrutzhxdoiqsfjohrdxuqfkgsztijitzsgkfquxdrhogzijdktfxosurhqhrusoxftkdjizgsutxdjgirhfzkoqokzfhrigjdxtusofujkdhqzsigrtxtrgiszqhdkjufoxogiqjthfuksrzdzrskufhtjqigoxrkhgtjdfuoixqszsqxioufdjtghkrdztughskqifrjoxojrfiqkshgutzdtojhdukrxizgsqfqsgzixrkudhjotkodzhfqrxijsgutugsjixrqfhzdokzrfjsquxtohgkidikghotxuqsjfrzkdhituzfsroxjqgqjxorsfzutihdkhzudrqxjsfokgtitgkofsjxqrduzhjhqroutgzfxksdidskxfzgtuorqhjdxrihutzgqkfjosojfkqgztuhirxdrtofsgdkuhjziqxqizjhukdgsfotrsqrojtugdxhfzkikzfhxdgutjorqsqrtzsfdukighjoxojhgikudfsztrqgsdxzqukijtforhroftjikuqzxdsguoitzqksxfdrhgjghrdfxskqztioufdikzgrhoqutsxjxstuqohrgzkidfxoqikgrfdstzuhjhuztsdfrgkiqoxohzfriskudqjgtxtgjqduksirfzhogjduhqzroktixsfsxitkorzqhudjgurtfkgsiqdhjxozoxjhdqisgkftruizodhjkftruqsxgxsqurtfkjhdozizoghksxfrqiutdjdtuiqrfxskhgozrqdkjthfxsiguzozugisxfhtjkdqrshujzigoftdqxkrkxqdtfogizjuhsuxkqsfijrtdhzgogzhdtrjifsqkxusjdzfrgkoxiqtuhutqixokgrfzdjsdtrkugifsxjzoqhqozjxsfigukrtdhrtqsfuijzogkdxdkgozjiufsqtrhtskuqfgihxrjodzdojrxhigfqukstotzkqgujdhsrfixifrshdjugqkztordtihouzqxgfskjksfgxqzuohitdrfjrxquszikgtdohodtgkizsuqxrjftufrjzqgsohdxikixdhosgqzjrfutskjruxzgtdifqhohqfidtgzxurjksiohxkdqjgftzsrursztfgjqdkxhoixshigfkjrdzqotutoqzdrjkfgihsxtrjdgihsuqzoxfkfxozqushigdjrtjksifrthdzxouqgquoxzdhtrfiskjgqdfuohtxkjirzszrijkxthoufdqgqrfdtxhijkugozszogukjihxtdfrqriugjoxfdqzkthshtkzqdfxojguiroqhurigjtxfdzskszdfxtjgiruhqogsfudhqkxztjoiriojtzxkqhdufsgosfjrktuxgzhqdidqhzgxutkrjfsofhuqxzjorgtdsikisdtgrojzxquhfsihufxzrktjdoqgqodjtkrzxfuhisuidrkotxqfjhgzszghjfqxtokrdiutxjogsizdfhuqrkrquhfdzisgojxtghdstqxfzkiruojourikzfxqtsdhgjditrkqhgusofxzxfosughqkrtidjiodxutqjrfgkszhzskgfrjqtuxdoirdukzgihfqsjxtotxjsqfhigzkudrogrhzifsxqkujdtdjukqxsfizhrgogqtihurjzxdofsksfodxzjruhitqgdfgoqshrxtikzjujzkitxrhsqogfdfrutoikdhgzjsqxqsjzghdkioturfkrtqdxzfjhogusisugohjfzxdqtrkqhtdkfuxjoiszgrgzsiojxufkdthqdihgfkuqxrzotsjstozrxqukfghidhxkuqtsijrzfogdgofzrjistqukxhroufdgthqsxkjzizjkxsqhtgdfuorzdqxrjitkhgsuofousghktijrxqdzrzthkixofuqdsgjgsdqufoxikhtzruozhgsixtfjrkdqdkrjftxisghzougidqsrfxzuhokjtjkohuzxfrsqdigisdtohrfjzgkquxuqkgzjfrhotdsitjurkzdsohxiqgfgqixhosdzkrujtsdoqfhgruijxztktzxjiurghfqodstdihzufjkoqxsgrgsxqokjfuzhidtjguhitsxqdrzfkokfzrdqxstihugjordjtzfxgsuikqhqkiusgxfztjdrorfhuzitkgjoqdxsxdqojgktizuhfrzfqxiusorkhtgdjdgthkrosuixqfzkftdjqouzrghsixishgrzuoqjdtfkdsoqtfgkjrxhzuiuzhxrjkgftqosdskhqjdxizturfgogfrutzixdjqhkshqrdzxfotujisgkgsijutofxzdrqhsjgtzrqdofixkhuhkxifodqrztgjsgxohdfrtzquksijiskuqztrfdhoxgriszuhjtkfdoqxgxqodfktjhuzsirqsijrtzdfuhxkogokxhufdztrjisquxhkotzrgisfdqjqdfsigrztokhxuskitjqhrxgfzduoudzfgxrhqjtiksqgdhijkfutxrozszorxtufkjihdgqdgtxojzifhkqsrursqkhfizjoxtgdziqkoftshjxdgurugdxjhstfokqizfsthkziorjxuqgdgquxjroizkhtsfquksixzfotdgrhjhrgdtofzxiskuqguoijxtqhrsdfzkzfdsrhqtxjiougrqjoxzsfudightkthgidufszxojqrzjrgdsiuxtkqhofohqktxuisdgrjzgkifztsjxqhdruourdhqxjstzfikgqjtodzkgruifshxhsfiurgkzdotjqihgsrkodfztqujxjuqtzfdokrsghiqsdihfxtukrjgzozgjrkutxfhidsqugzrsxdihkfjqotoqjfkhidxsrzguogfzdhxriqjukstskujqirxhdzfgotgxjqruhzdofksiskfodzhurqjxgthosrjifutqzdgxkxgdzqtufijrsohkjutgirzqdhfosxsofhdqzrigtujkuxkihdgsjqztrfofrtzqjsgdhikxujogizufdhrstkqxqktsrhdfuzigojsfkhxojtdgqrizuzirqgdtjoxhkfsfshtkoizqjgudrxrdugjqziokthsfsgduzhjqrixofktkfoxirqjhzudgshtzuijsqfgrkoxdxokrgfqsjiuzthgozrtikhjqudfsxsfduqjhkitrzogzhkidgtsqojfuxrxufjoqstgdikhzrifjqdztkxsoguhugosxktzdqjfirktzixusjhqfrgodogrfqhjsuxiztkhqxurdsfjziotkgktoizjfsdruxqhudohjqxgzfrksitiskrfzgxqjhodufrgdhstiquojkxzxkjouqitshdgrfrkjohszxqutgfdidfgtuqxzshojkrdukqfzrghxsjtioitjsxhgrzfqkudkhoqzgxtrsjfdiuidfjsrtxgzqohkdgtqsxzjforukihikurofjzxsqtgdhkdufxgizsorjqtqjroszigxfudkhizgosurfthkjdqxqdjkhtfrusogzizrhdfkogxiqtjusujtqixgokfdhrzdiqshtxfruogzkjkzgourfxthsqidqtzfrkxhugojdisidjoguhxkrfztqxhqgftzdrsjikuoukijsrdztfgqhxdforxusgjhkqztitzqkhjgsuxrofdrdixqokjfgtshzuzhstgfjkoqxidrfsgzxjrudikhtoqothkidurjxzgsfikhgdtzjufqosrxrsoqfujztdghkizorfsidqxhguktjtkughxqdisfroztiufjdoqxrhzksgskzhrxqodjfuitrgdtqjzxusfhokikohfsuxzjqtdgroidhfztjkgrsuqxqusrgkjtzfhdiozrjshkdutxgfoiqiofgxtudkhsjrzhjsqxozktrgidufudigrtkzoxqsjhkrsizhoxqdgtjufujtgdqxohzisrkojtgzudkhisqxrfrxqsihkduzgtjodqjurfhztxgkosisokgxtzhfrujqdghzkuorjdxtifsqsfitxdjroukzhgkgqhjixrftusozdzosutfrxijhqgktjxfgzkidsruoqhqoursdikzgfxjtqztijskxurhgdofodghruxksjitzqxrikfsohtqudgzjzgduqthosfkirxdjokfitxsqhuzgrgzuhqsxtifkojdhixojdqksrfutzgztufrskqdjoxihuhsjrdokqizfgxtxgfziqkodrjshusoduxijzrkhftqgqtfhkrzjixudoszxfjhkrgtsudoqiqodustgrkhjfxzigsxzfthuorqjkdkjqrouhtfzxsgirtusfqkoxijhzdgdzhjixokqfsutrqstfkhogdxrizjujzirxdgohkftsqzogsxjdutkhiqfrfqihktudjxsgozxdjifzgkohtqusrsuqthokgzfijdxoidhfsrjqkugzxtxzgukqjrsfhdiokihrtujoqfszxdgdxzsfqojutrhikfiutzxdrgsjhoqkqohjsgrdxztuiftsjogrfzkdqxihuhixqdkzfrgojstufdzokqisxtrgjhjgrtxsiqkozdfujuhdfqtorgxizskszixgrotqfdhujtsjdfghirqzxoukuoxzqrihgfdjstozqshkgiuftjxrdrxjtfuigkhsqzoqhifkjgxtudsrozorsdutxgjkfihqgurkfizjohdqstxtsqdhojzifkrugiudkhfzqorgxjstsjxgroqzfhkduixgrjiqdozuhkfstsfkhuzodqijrgxrxqujgfshtoidzkzdiothsfgjuqxrzuktrjsqgdhifoxofihdgqsjrtkuzfrqstihgxuodjzkzjdouxghitsqrfxdrojkhfzqtguisiugtqzfhkjordxsiujkorqdhzgftxtfgzhdqrokjuisgzqfodxihksrjtutjrskhixdofqzgdioxkzfusgtrqjhjqrtgsufzkxoidqzjtrxuogfdhkisikhdfgouxrtjzqzgqhriofktusjdxdjsutkfoirhqgzsuqzohjfxdrigtktgirdxfjhozqusdgjqfuhrkztixosoxitzkrhufqjgdjigtudqzxrsfohkhofsrxzqdutgijudgiktozqxshfjrjfhsxqzotkigdugszxfujkdrhotiqitohrdkjufxzsgdutogszhkriqfjxjfqirkhzsgotudrzkihsjqxfogudtdugofxqjshikzrorsdxkzuhtjifgqgfijthuzkxdsrosixfdrkhjogzutqtuzgojhkrdfxisdhgjqoistxfzrukurzfxtsioqjghdhxsgfzrkquitdojodtiuqkrzfgsxhigoxkquzsfdjrhthrjdfszuqkxogizxtfdigsrkhuqojoquhkrsgidftxzgzrusijqtxofhdkdhfoxtqjisurzghfjsgkxtduroqiziqorudtxkgsjfhtizhqsjxfgkrouduorkgfxjsqhzitigqzousdhxkfrtjtrfkxhdsuozqgitskrgfijzdohqxuxqhodzjifgrkstrohsjiqtgzxfukdkufxzgtqijshorgrdijxqofhtzskukszthfoqxjidrgdrsqxjihfotugkzkgutofhijxqsrdohsidfrjkqtxzgugzxtqkjrfdishoskrxdfqzgiojthuhtjoigzqfdxrksqrdzuithgfskjoxojksfghtiuzdrqfixjrsouqhgtzdkdztghquosrjxifuzkoshdrqftxjgigjxtfqrdhsokzujodufxtqkshzgirigzhskqtxfudojzqfhgitkrxdjousuojdxrktighfqzroxtkzsdjihgqfufqghijdszktxorgqihzkufoxsdtjrjtdsxofukzhiqgofkrztxjhgiqsudusqighjxtzrkfogtzjkfqihdxsurorusxdhiqfkjztgjohitfusqkxzrdgdrzxkqsuftihojzqtxifjdogsrhkukhrsgodjfixtqzqxjiohzgtdrfkusukfrdtgzhoijxqroxdfizshgjutqkqtujghszifdxorqojxrzusihktdfgfdtkhisuzrxjoqurzisdthjqxfgokogfxqjhtdsizrusgjfqdzioxrthukuhtrxoizdqfjgsdhosqgzfjxriutktuirxjfzgqsohdiojuzqrkshxdftgtfdxhskrqzujoixkrhgtjqzdisoufuosidzqjtghrkxrgfhjzqousxitkdktixsuoqzjhfgrugsqzdotkrfjhixihjfrktodzqsgusruqxgtihzodfkjkfdozhitgxqurszkodfgrhtsxqjuiujqxsthrgfdokzutdhzoifxskrjgqgjrksxfiozhdtuoskfdjqtxuirhgzghriuxtqjdfksodrqsotzkguhfixjxifhugkztosqrdhdourfjtziqskxgxksqiztjfruodhqhgkfouzjstirxdxritsjzuofkghqdrsfugjzkhitxoqoxtihkzjgufsrdisxjdgruhkzqfotofqzkhurgdjxsiztohkfqrusgdxijixdgsurqfkhotzkzqfghtsujdioxrxoidjusthgfqzkxgiozhruskjtfqdqftjksurhzoigxjiushofzkdqrtgxgtrqdkzfohsuijrtjshqzodgukixfxikugdozqhsjtrkrtsdzxigjhuqofoquhjgixzdstrkzohjrkgxtqusdifidsuqtxgkrjhozdiuohgstrzxkjqfqjkxzrtsghouidkzudxogstfirjhqhjriftsgoxduzkjtxduqhigkrsofzfosrkgihqudxtjzhjqtudoixsgkrfrkgsxiodutqjhzxsrjditzgqfohukuhofqgztidjrsxtsozfjxkrugqhdidhqgurkxjfzostgjurshokqfxzditidzxfqkohsrujgxjruiofsthdqzkgkzqdhtsfoiurjxkrxidoutqjshfzgzfhsjqtuodixrkxtrokhfgqdjuzsiszujdqgfhkortxjordihxkugztfqsqftzgukxhidrojdxiztuoskgqrhfjfhrqgksoutzixdqtuzfrsioxghjkdkjhgxoisrfzutqgxuotkfrqhzsjidijszhqrfktouxgiufsotzhkjrxdqgqdxrjkhztosfuirkgzjdqtxfsiuohouisfxtqdjzgkristdkrzhgfujoxqxojufghzrkdtsithdugjrkfoxzqisiqzxofkrjgudhtrhdzfsutkgixqjojqxigktusfzdhrgsdkxtjhfzqriouoirqzfhjtxkdsgjodzquighxkrftstfrkxhgiuqzdojthrifzkqgdujsoxosjudgqkzfirhtktdxsojhgufrqzizqrfughjosxdtkojrxgudfkhisqtztqsihkfdugxrjortxhqiodkuzjgsfsgjzukdoiqhxtrijqktgofhxsrzdudzrsxhfogtkqjirjzfuqotdkgsixhxisgkdtoqufzjruqosxfijkrhzgtdtgzhrkjifxsoqurqksxhgotfjzuidiuzjftoghxskqrdgsufqtizjhkxrorxkhjzitqfusgdzfkrqsoxihdtjugujtdhixosqrkfzuozgixjtrkdqfhshfqdkrtjxigzouhxkfrgjqiodtzsusztdoiqjgrfkxhtqkihruxjdozfgsgfzodjxurhikqtzrxghioudqjftksktfjqduoihgxrzqtgrkdjoifxzsuhuszxfiojdkrgtqxfoiqgsujhzkrtdtrkzhjusgqiofxtuiqkzorgxjshdfdhsjxgrozkqiutfrjuzdsgktqioxhxoiqtkgsdzujrfxtduzjgoiqhskrfrkshqiogjzudtxgoxrjshidktuqfzfqutkdihsjrxogkfgjzrdqotixhusuhxitoqdrzjgfkhorsxjuzgktfiqdqiftkgzujxsrohjxifutshgzkdqoroqdkzghstufixjukofrqgjixdhztstzhdxijgqrfokujqotigrsdhzxfkukfxzhdsrgitoqjzkfiqoudsthrjxgxjrhtsduoqifkzjiqtzdkhsgfxuorouxfgshkdztqijotzuqrhkxfsdjigijdsfxkhrquztohiutxjdgszqkorfrokqzsgdjxtuihrkdqsztighofjxuxjfohgitzsqdkrjohxzsdifkgqturutqgkfidszxhojuogtkfizrsjxdhqhdxjsrzifktgouxjhkogitqrzfusdsufzrqtigokhjxjfdsziuhtqrkgoxogkrqthuizsdfjrqofikzstjxuhgdghuxjtszkifoqrkgqufsihrdojxtztxjodrhisfuqgkqjkiruzghxtdfsosfdtxhgzurikjqohkxjiurfgsztqdqtzsgfruijxkhojgsrdutiqkxzhofohzxkqitudrsgjodgiftkxruhsqzjzqshurxktfigdodtrqxoiszujkgfhfgkjuzsioxqrtdzjrfqsohdikguxtxugkidhosqfrjzdukxfgiqzrhtjosojthrzqigfxkudziorsqhdujtxgfkfgxtjudhqsroizoiufzqdxghjtsrkrstjhgxdqzfuiofqjutixszohdrgkgrdhozsxitujqfuhfdzgrqjositxkxtisojqrgzdfhujtfqxzhuskrdoigiodrksuhzxqftjudqxhtkszrgifojofigrzskthxqduxhjzgokuftqisdrdsiqtfukogzjhxsrfohjtugdikzqxqzkidgutjhofrsqdrxoisthjzfgukugfzjhtsioxrdqsizthrjxfodqukgkuqdofxjrhtzisfkjoixhgdzrsqutuqsrzdghxiojkfqisgjkthzuxfdrordfxuzhtkjgsiquqzhrfxtdgjkosisokjgdtxfrhzqujhofirgqdsutzkxkztusdqgrifohjogsxhkjqzfrditutidrfzqjkhxsgoifjursozqdkxgthtgxkdqzosrujfigtzhkxofsjriuqdquirjsfoxkhztgsdtxjkhoizrgqufuqgrziohkjxtdskidusfrogtzxjhqhjxztgorfsudikztjhiuqskrogdfxfdgorksquihjtzuhtqorzgjkfxsdidsxfkjgzroqthuxurqtjfogdszihkhizsdgofjtqruxuzhigktfjosdxqrqxdsojftkgihzuxzkosurqihfjtgdgtjfhiqrusokzxuxtodkfrzhsqigjgiqshzrfkdotxurfoqikgdzthuxjsjxuhtzdgkiqofrqgirzxtsufhjdokodjhfustxzrigqfzoiguqksrxjdhthdjxrskqugiozfuzjhoidxqrtsfgkgfstrqxdiohjzutodgkqxihfzsujrjuszfhixqkgdotsxizjqfruhgodtktdoghurfqjzixsjtsokuixzhfdgrqrgdfhzxiukostjtxzofgrsjhqidukudiqhjsrgfozxtudzgxikjrsohfqtqfhosrjkixgzduiosxtqrkjfzguhdhugzfjkrqtxsoijodqigsuzkxfhrtrhfxkzusgiqdojgsfixujhktdqrzozrqdtkhjuxifsgfjskqougtrzdihxhidzrtguoqksjfjiodsftqhzrxkgugkxrzhqtfsdoijujrhsofdkxqgtziztgqxkdfoshrjufjxhotsirdzgqukuqgzdristohxjfqrhgftsdojzkuxixukzjodstfghrqjzghuofixtrqksdskqrtxifouhgzj",
                        347,
                        null,
                ),
        )
    }

    @Test
    fun shouldReturnExpected() {
        val palindromes = input.cutInNPalindromes(K)
        if (expected == null) {
            assertNull(palindromes)
            return
        }
        assertNotNull(palindromes)
        val result = input.toPalindromeStrings(palindromes)
        assertEquals(expected, result)
    }
}
